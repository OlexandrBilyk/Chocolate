const refsSubscr = {
    openSubscrBtn: document.querySelectorAll('[data-open-subscribe]'),
    closeSubscrBtn: document.querySelector('[data-close-subscribe]'),
    backdropSubscr: document.querySelector('.backdrop-subscribe'),
  };

  refsSubscr.openSubscrBtn.forEach(btn => {
    btn.addEventListener('click', toggleSubscr);
  });

  refsSubscr.closeSubscrBtn.addEventListener('click', toggleSubscr);

  function toggleSubscr() {
    refsSubscr.backdropSubscr.classList.toggle('is-hidden');

    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }