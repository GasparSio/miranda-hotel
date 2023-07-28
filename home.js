//CLICK HAMBURG MENU
const headerSecIcon = document.querySelector('.header__section-ham-menu')
const mobImg = document.querySelector('.icon-menu--big');
const crossIcon = document.querySelector('.icon-menu--cross');
const header = document.querySelector('.header__section');
const crossImg = document.querySelector('.crossIcon');
const menuMovil = document.querySelector('.header__mob-menu');

function expandirHeader() {
    header.classList.add('header-expand');
    menuMovil.classList.remove('inactive')
}
function cerrarHeader() {
    header.classList.remove('header-expand');
    menuMovil.classList.add('inactive')
}
const clickHeaderSecIcon = headerSecIcon.addEventListener('click', () => {
    mobImg.classList.toggle('inactive');
    crossIcon.classList.toggle('inactive');
    
    const hambInact = mobImg.classList.contains('inactive');
    const crossInact = crossIcon.classList.contains('inactive');

    if(hambInact){
        expandirHeader()
    }else{
        cerrarHeader()
    }
})


//SLIDER
const slider = document.querySelector(".slider-images");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const slideWidth = slider.clientWidth;
let currentIndex = 0;

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  updateSliderPosition();
});

function updateSliderPosition() {
  const translateXValue = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${translateXValue}px)`;
}
