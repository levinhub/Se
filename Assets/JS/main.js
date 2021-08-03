// HEADER NAVBAR
const nav = document.querySelector(".nav");
const logo02 = document.querySelector(".logo__02")
const logo01 = document.querySelector(".logo__01")
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector(".menu__btn");
const cancelBtn = document.querySelector(".cancel__btn");
const listItem01 = document.querySelector(".nav__list__item__01");
const listItem02 = document.querySelector(".nav__list__item__02");
const listItem03 = document.querySelector(".nav__list__item__03");
const listItem04 = document.querySelector(".nav__list__item__04");
const listItem05 = document.querySelector(".nav__list__item__05");
const listItem06 = document.querySelector(".nav__list__item__06");
const listItem07 = document.querySelector(".nav__list__item__07");
menuBtn.onclick = ()=>{
    menu.classList.add('active');
    menuBtn.classList.add('hide');
}
cancelBtn.onclick = ()=>{
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
}
window.onscroll = ()=> {
    this.scrollY > 20 ? nav.classList.add('sticky') : nav.classList.remove('sticky');
    this.scrollY > 20 ? menuBtn.classList.add('sticky') : menuBtn.classList.remove('sticky');
    this.scrollY > 20 ? logo01.classList.add('sticky') : logo01.classList.remove('sticky');
    this.scrollY > 20 ? logo02.classList.add('sticky') : logo02.classList.remove('sticky');
    this.scrollY > 20 ? menu.classList.add("sticky"):menu.classList.remove("sticky");
    this.scrollY > 20 ? listItem01.classList.add("black") : listItem01.classList.remove("black");
    this.scrollY > 20 ? listItem02.classList.add("black") : listItem02.classList.remove("black");
    this.scrollY > 20 ? listItem03.classList.add("black") : listItem03.classList.remove("black");
    this.scrollY > 20 ? listItem04.classList.add("black") : listItem04.classList.remove("black");
    this.scrollY > 20 ? listItem05.classList.add("black") : listItem05.classList.remove("black");
    this.scrollY > 20 ? listItem06.classList.add("black") : listItem06.classList.remove("black");
    this.scrollY > 20 ? listItem07.classList.add("black") : listItem07.classList.remove("black");
}
// News Side