const topScroll = document.querySelector('.scroll-top');
window.onscroll = () => {
    toggleScroll();
};
function toggleScroll() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    topScroll.classList.remove('hidden');
  } else {
    topScroll.classList.add('hidden');
  }
}
