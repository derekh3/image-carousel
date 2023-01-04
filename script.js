function moveForward(carousel, circles) {
  let current = carousel.querySelector(".visible");
  let currentCircle = circles.querySelector(".active");
  console.log(circles);
  // let next;
  let next;
  let nextCircle;
  if (current.nextElementSibling !== null) {
    next = current.nextElementSibling;
    nextCircle = currentCircle.nextElementSibling;
    console.log(next);
  } else {
    next = current.parentNode.firstElementChild;
    nextCircle = currentCircle.parentNode.firstElementChild;
  }
  let nextImg = next.querySelector("img");
  let currentImg = current.querySelector("img");
  nextImg.classList.add("fadeIn");
  currentImg.classList.toggle("fadeIn");
  next.classList.add("visible");
  current.classList.toggle("visible");
  currentCircle.classList.toggle("active");
  nextCircle.classList.add("active");
}

function moveBack(carousel, circles) {
  let current = carousel.querySelector(".visible");
  let currentCircle = circles.querySelector(".active");

  // let next;
  let next;
  let nextCircle;

  if (current.previousElementSibling !== null) {
    next = current.previousElementSibling;
    nextCircle = currentCircle.previousElementSibling;

    console.log(next);
  } else {
    next = current.parentNode.lastElementChild;
    nextCircle = currentCircle.parentNode.lastElementChild;
  }
  let nextImg = next.querySelector("img");
  let currentImg = current.querySelector("img");
  nextImg.classList.add("fadeIn");
  currentImg.classList.toggle("fadeIn");
  next.classList.add("visible");
  current.classList.toggle("visible");
  currentCircle.classList.toggle("active");
  nextCircle.classList.add("active");
}

function generateCircles(container, number) {
  for (let i = 0; i < number; i++) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.onclick = (e) => {
      if (!e.target.classList.contains("active")) {
        let currentCircle = container.querySelector(".active");
        jumpToImage(i);
        circle.classList.add("active");
        currentCircle.classList.toggle("active");
      }
    };
    if (i == 0) {
      circle.classList.add("active");
    }
    container.appendChild(circle);
  }
}

function jumpToImage(imageIndex) {
  let images = document.querySelectorAll(
    ".carousel-images-container .image-item"
  );
  console.log(images);
  let currentImage = document.querySelector(
    ".carousel-images-container .visible"
  );
  currentImage.classList.toggle("visible");
  images[imageIndex].classList.toggle("visible");
}

const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const carousel = document.querySelector(".carousel-images-container");
const circlesContainer = document.querySelector(".circles");
const images = carousel.querySelectorAll(".image-item");

generateCircles(circlesContainer, carousel.childElementCount);

forward.onclick = () => {
  moveForward(carousel, circlesContainer);
};

back.onclick = () => {
  moveBack(carousel, circlesContainer);
};

let intervalID = setInterval(
  () => moveForward(carousel, circlesContainer),
  5000
);
