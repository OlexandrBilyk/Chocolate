var refsMenu={openMenuBtn:document.querySelector("[data-open-menu]"),closeMenuBtn:document.querySelector("[data-close-menu]"),menu:document.querySelector(".mobile-menu")};function toggleMenu(){refsMenu.menu.classList.toggle("is-hidden")}refsMenu.openMenuBtn.addEventListener("click",toggleMenu),refsMenu.closeMenuBtn.addEventListener("click",toggleMenu),refsMenu.menu.addEventListener("click",(function(e){e.target===refsMenu.menu&&toggleMenu()}));
//# sourceMappingURL=index.b2d06fef.js.map
