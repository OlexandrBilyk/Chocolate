var refsBuy={openModalBtn:document.querySelectorAll("[data-open-buy]"),closeModalBtn:document.querySelector("[data-close-buy]"),backdrop:document.querySelector(".backdrop-buy")},refsDiscount={openThanksBtn:document.querySelectorAll("[data-open-thanks]"),closeThanksBtn:document.querySelector("[data-close-thanks]"),backdropThanks:document.querySelector(".backdrop-thanks")};function toggleModalBuy(){refsBuy.backdrop.classList.toggle("is-hidden"),"hidden"===document.body.style.overflow?document.body.style.overflow="visible":document.body.style.overflow="hidden"}function showModalThanks(){refsDiscount.backdropThanks.classList.remove("is-hidden"),refsBuy.backdrop.classList.add("is-hidden")}function hideModalThanks(){refsDiscount.backdropThanks.classList.add("is-hidden"),document.body.style.overflow="visible"}refsBuy.openModalBtn.forEach((function(e){e.addEventListener("click",toggleModalBuy)})),refsBuy.closeModalBtn.addEventListener("click",toggleModalBuy),refsDiscount.openThanksBtn.forEach((function(e){e.addEventListener("click",showModalThanks)})),refsDiscount.closeThanksBtn.addEventListener("click",hideModalThanks);
//# sourceMappingURL=index.b2d93fae.js.map