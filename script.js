function moveForward(carousel) {
  let current = carousel.querySelector(".visible");
  console.log(current.parentNode.firstElementChild);
  if (current.nextElementSibling !== null) {
    current.nextElementSibling.classList.add("visible");
  } else {
    current.parentNode.firstElementChild.classList.add("visible");
  }
  current.classList.toggle("visible");
}

const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const carousel = document.querySelector(".carousel-images-container");

forward.onclick = () => {
  moveForward(carousel);
};
