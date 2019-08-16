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
    //adiciona estrela//
    index = teste.indexOf($star);
    i = 0;
    if (!$star.classList.contains("-active")) {
      $star.classList.add("-active");
      while (i < index) {
        teste[i].classList.add("-active");
        i++;
      }
    } else {
      $star.classList.remove("-active");
      i = index;
      while (i <= 4) {
        teste[i].classList.remove("-active");
        i++;
      }
    }
  });
});

// $firstStar.forEach((star, index) => {
//   star.addEventListener("click", () => {
//     handleStar(index);
//   });
// });

// function handleStar(index) {
//   const tamanho = $firstStar.length - 1;
//   if ($firstStar[index].classList.contains("-active")) {
//     for (let i = tamanho; i > index; i--) {
//       $firstStar[i].classList.remove("-active");
//     }
//   } else {
//     for (let i = 0; i <= index; i++) {
//       $firstStar[i].classList.add("-active");
//     }
//   }
// }
