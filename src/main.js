import iziToast from 'izitoast';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

import iziToastErrorIcon from './img/izitoast-error-icon.svg';

const galleryFormEl = document.querySelector('.gallery-form');
const galleryEl = document.querySelector('.gallery-list');
const galleryLoaderEl = document.querySelector('.gallery-loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

let searchValue = '';
let currentPage = 1;
let amountImages = 0;
let rectHeight = 0;
// const PER_PAGE = 26;

galleryFormEl.addEventListener('submit', onGalleryFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

async function onGalleryFormSubmit(event) {
  event.preventDefault();
  currentPage = 1;
  amountImages = 0;
  searchValue = event.target.elements.search.value.trim();

  if (searchValue === '') {
    showErrorToast(
      'The input field cannot be empty. Please enter a search keyword.'
    );
    return;
  }

  clearGallery(galleryEl);
  hideLoadMoreButton(loadMoreBtn);
  showLoader(galleryLoaderEl);

  try {
    const { data } = await getImagesByQuery(searchValue, currentPage);

    if (data.hits.length === 0) {
      showErrorToast(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      return;
    }

    amountImages += data.hits.length;

    createGallery(data.hits, galleryEl);
    rectHeight = galleryEl.firstElementChild.getBoundingClientRect().height;

    // if (data.hits.length === PER_PAGE) {
    //   showLoadMoreButton(loadMoreBtn);
    // }

    if (amountImages < data.totalHits) {
      showLoadMoreButton(loadMoreBtn);
    }
  } catch (error) {
    showErrorToast(error.message);
  } finally {
    hideLoader(galleryLoaderEl);
    galleryFormEl.reset();
    galleryFormEl.elements.search.focus();
  }
}

async function onLoadMoreBtnClick() {
  try {
    hideLoadMoreButton(loadMoreBtn);
    showLoader(galleryLoaderEl);

    currentPage++;
    const { data } = await getImagesByQuery(searchValue, currentPage);

    createGallery(data.hits, galleryEl);

    scrollBy({
      top: rectHeight * 2,
      behavior: 'smooth',
    });

    amountImages += data.hits.length;

    // if (data.hits.length === PER_PAGE) {
    //   showLoadMoreButton(loadMoreBtn);
    // }

    if (amountImages < data.totalHits) {
      showLoadMoreButton(loadMoreBtn);
    }

    if (amountImages === data.totalHits) {
      showErrorToast(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    showErrorToast(error.message);
    hideLoadMoreButton(loadMoreBtn);
  } finally {
    hideLoader(galleryLoaderEl);
  }
}

export function showErrorToast(message) {
  iziToast.error({
    title: 'Error',
    titleColor: '#ffffff',
    message,
    messageColor: '#ffffff',
    maxWidth: '385px',
    iconUrl: iziToastErrorIcon,
    position: 'topRight',
    closeOnEscape: true,
    backgroundColor: '#ef4040',
    progressBarColor: '#b51b1b',
    timeout: 3000,
  });
}
