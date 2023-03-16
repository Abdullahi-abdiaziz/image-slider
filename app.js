const sliderImage = document.querySelector('.image-slider');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector(".arrow-right");
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
const slide1 = document.querySelector('#img1');
const slide2 = document.querySelector('#img2');
const slide3 = document.querySelector("#img3");


const images = [
  'architect.jpg',
  'chicago.jpg',
  'london.jpg'
]

const headings = [
  'Our Design',
  'Chicago',
  'London'
]

const descriptions = [
  "Make your hause awesome",
  "place of music and songs",
  'The city that never sleeps',
];

let id = 0;

window.addEventListener('DOMContentLoaded', () => {
  slider(id);
})

function slider(id) {
  sliderImage.style.backgroundImage = `url(images/${images[id]})`;
  sliderImage.classList.add('image-fade');
  setTimeout(() => {
    sliderImage.classList.remove('image-fade');
  }, 550)

  heading.innerText = headings[id];
  description.innerText = descriptions[id];

  if(id === 0) {
      slide1.classList.add('active')
      slide2.classList.remove('active')
      slide3.classList.remove("active");
    }
  else if (id === 1) {
      slide2.classList.add("active");
      slide1.classList.remove("active");
      slide3.classList.remove("active");
    }
    else {
      slide3.classList.add("active");
      slide1.classList.remove("active");
      slide2.classList.remove("active");
    }
  }

rightArrow.addEventListener('click', function() {
  id++;
  if(id > images.length - 1) {
    id = 0;
  }
  slider(id);
})

leftArrow.addEventListener('click', () => {
  id--;
  if(id < 0) {
    id = images.length - 1
  }
  slider(id)
})