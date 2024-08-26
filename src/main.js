import iziToast from 'izitoast';

import { gethPhotos } from './js/pixabay-api';
import { createGalleryElement } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';

import errorMessage from './img/error-massage.svg';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery-list');
const loadBtn = document.querySelector('.loader-btn');
const loaderBox = document.querySelector('.loader-box');

let searchInputValue = '';
let currentPage = 1;
let cardHeight = 0;
let quantityElements = 0;

form.addEventListener('submit', onFormSubmit);
loadBtn.addEventListener('click', onLoadBtnClick);

const simpleLightbox = new SimpleLightbox('.gallery-list a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  overlayOpacity: 1,
});

async function onFormSubmit(e) {
  try {
    e.preventDefault();

    currentPage = 1;

    searchInputValue = form.elements.search.value.trim();

    if (searchInputValue.trim() === '') {
      return;
    }

    gallery.innerHTML = '';

    loaderBox.classList.add('loader-box-active');

    const response = await gethPhotos(searchInputValue, currentPage);

    if (response.data.hits.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '24px',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: errorMessage,
        maxWidth: '385px',
        timeout: 5000,
      });

      form.reset();
      form.elements.search.focus();
      loaderBox.classList.remove('loader-box-active');
      loadBtn.classList.remove('loader-box-active');
      return;
    }

    const galleryCardsTemplate = response.data.hits
      .map(imgInfo => createGalleryElement(imgInfo))
      .join('');

    gallery.innerHTML = galleryCardsTemplate;
    cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
    simpleLightbox.refresh();
    form.reset();
    form.elements.search.focus();
    loaderBox.classList.remove('loader-box-active');
    loadBtn.classList.add('loader-box-active');
  } catch (error) {
    console.log(err);
  }
}

async function onLoadBtnClick() {
  try {
    currentPage++;

    loaderBox.classList.add('loader-box-active');

    const response = await gethPhotos(searchInputValue, currentPage);

    const galleryCardsTemplate = response.data.hits
      .map(imgInfo => createGalleryElement(imgInfo))
      .join('');

    gallery.insertAdjacentHTML('beforeend', galleryCardsTemplate);
    simpleLightbox.refresh();

    loaderBox.classList.remove('loader-box-active');

    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    quantityElements += response.data.hits.length;

    if (quantityElements === response.data.totalHits) {
      iziToast.show({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        titleSize: '16px',
        titleLineHeight: '24px',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '24px',
        iconUrl: errorMessage,
        maxWidth: '385px',
        timeout: 5000,
      });
      loaderBox.classList.remove('loader-box-active');
      loadBtn.classList.remove('loader-box-active');
    }
  } catch (error) {
    console.log(error);
  }
}
