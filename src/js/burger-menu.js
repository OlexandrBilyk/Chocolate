const refsMenu = {
    openMenuBtn: document.querySelector('[data-open-menu]'),
    closeMenuBtn: document.querySelector('[data-close-menu]'),
    menu: document.querySelector('.mobile-menu'),
  };
  
  refsMenu.openMenuBtn.addEventListener('click', toggleMenu);
  refsMenu.closeMenuBtn.addEventListener('click', toggleMenu);
  refsMenu.menu.addEventListener('click', function (event) {
    if (event.target === refsMenu.menu) {
      toggleMenu();
    }
  });
  
  function toggleMenu() {
    refsMenu.menu.classList.toggle('is-hidden');
  }