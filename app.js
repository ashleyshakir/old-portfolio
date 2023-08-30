const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
function toggleButton(){
    navList.classList.toggle('show')
}
hamburgerButton.addEventListener('click', toggleButton)
const aboutMeLink = document.querySelector(".button a")
const aboutMeButton = document.querySelector(".button")
aboutMeButton.addEventListener("mouseenter",function(){
    aboutMeLink.style.color = "#f2ebe9"
})
aboutMeButton.addEventListener("mouseleave",function(){
    aboutMeLink.style.color = "#de5499"
})