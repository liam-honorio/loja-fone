const $heart = document.querySelector(".-heart");

$heart.addEventListener("click", () => {
  $heart.classList.toggle("-active");
});
