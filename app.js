const sliderImage = document.querySelector('.image-slider');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector(".arrow-right");
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
const slide = document.querySelectorAll('span');

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

  slide.forEach(item => {
    item.classList.remove('active');
    item.addEventListener('click', () => {
      slider(item.id)
    })
  })
  slide[id].classList.add("active");
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