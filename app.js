const shareBtn = document.querySelector(".share-logo");
const popup = document.querySelector(".pop-up");

shareBtn.addEventListener("click", function () {
  popup.classList.toggle("active-pop-up-1");
  this.classList.toggle("share-logo-active");
});
