const refsReview = {
  openReviewBtn: document.querySelectorAll('[data-open-review]'),
  closeReviewBtn: document.querySelector('[data-close-review]'),
  backdropReview: document.querySelector('.backdrop-review'),
};
const refsFeedback = {
  openFeedbackBtn: document.querySelectorAll('[data-open-feedback]'),
  closeFeedbackBtn: document.querySelector('[data-close-feedback]'),
  backdropFeedback: document.querySelector('.backdrop-feedback'),
};

refsReview.openReviewBtn.forEach(btn => {
  btn.addEventListener('click', toggleModalReview);
});

refsReview.closeReviewBtn.addEventListener('click', toggleModalReview);

function toggleModalReview() {
  refsReview.backdropReview.classList.toggle('is-hidden');

  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

refsFeedback.openFeedbackBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    let reviewsModalInputs = document.querySelectorAll('#reviewsInput');
    const areAllInputsFilled = Array.from(reviewsModalInputs).every(
      input => input.value.trim() !== ''
    );
    if (
      areAllInputsFilled &&
      reviewsModalInputs[1].value.trim().endsWith('@gmail.com')
    ) {
      showModalFeedback();
    }
  });
});

refsFeedback.closeFeedbackBtn.addEventListener('click', hideModalFeedback);

function showModalFeedback() {
  refsFeedback.backdropFeedback.classList.remove('is-hidden');
  refsReview.backdropReview.classList.add('is-hidden');
}
function hideModalFeedback() {
  refsFeedback.backdropFeedback.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
}
