const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelectorAll(".star");
let teste = [];

$firstStar.forEach(function(item) {
  teste.push(item);
});

console.log(teste);

$heart.addEventListener("click", handleClick);

// $firstStar.forEach(function($star) {
//   $star.addEventListener("click", handleClick);
// });

// function handleClick() {
//   this.classList.toggle("-active");
// }

// $heart.addEventListener("click", () => {
//   $heart.classList.toggle("-active");
// });

// $firstStar.forEach($star => {
//   $star.addEventListener("click", () => {
//     $star.classList.toggle("-active");
//   });
// });

// $firstStar.forEach(function($star) {
//   $star.addEventListener("click", handleClick);
// });

// function handleClick() {
//   this.classList.toggle("-active");
// }

teste.forEach($star => {
  $star.addEventListener("click", () => {
    $star.classList.toggle("-active");
    index = teste.indexOf($star);
    i = 0;
    total = 4;
    while (i < index) {
      teste[i].classList.toggle("-active");
      i++;
    }
  });
});
