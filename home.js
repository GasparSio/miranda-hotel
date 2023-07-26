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


//SCHEDULE 
// document.addEventListener("DOMContentLoaded", function () {
//     const calendarioBtn = document.getElementById("calendario-btn");
//     const fechaInput = document.getElementById("fecha");
  
//     calendarioBtn.addEventListener("click", function () {
//       // Abrir el calendario al hacer clic en el botón
//       fechaInput.focus();
//     });
//   });
