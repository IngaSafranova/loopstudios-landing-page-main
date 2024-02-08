const hamburgerBtn = document.getElementById('mobile-toggle');
const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close');
const nav = document.getElementById('navbar')
console.log(closeIcon)
const toggle = ()=>{
    hamburger.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    nav.classList.toggle('hidden')

}