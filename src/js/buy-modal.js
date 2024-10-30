const refsBuy = {
    openModalBtn: document.querySelectorAll('[data-open-buy]'),
    closeModalBtn: document.querySelector('[data-close-buy]'),
    backdrop: document.querySelector('.backdrop-buy'),
  };
  const refsDiscount = {
    openThanksBtn: document.querySelectorAll('[data-open-thanks]'),
    closeThanksBtn: document.querySelector('[data-close-thanks]'),
    backdropThanks: document.querySelector('.backdrop-thanks'),
  };
  
  refsBuy.openModalBtn.forEach(btn => {
    btn.addEventListener('click', toggleModalBuy);
  });
  
  refsBuy.closeModalBtn.addEventListener('click', toggleModalBuy);
  
  function toggleModalBuy() {
    refsBuy.backdrop.classList.toggle('is-hidden');
  
    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
 
  refsDiscount.openThanksBtn.forEach(btn => {
    btn.addEventListener('click', showModalThanks);
  });
  
  refsDiscount.closeThanksBtn.addEventListener('click', hideModalThanks);
  
  function showModalThanks() {
    refsDiscount.backdropThanks.classList.remove('is-hidden');
    refsBuy.backdrop.classList.add('is-hidden');
  }
  
  function hideModalThanks() {
    refsDiscount.backdropThanks.classList.add('is-hidden');
    document.body.style.overflow = 'visible';
  }