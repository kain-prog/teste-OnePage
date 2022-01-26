const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

let btnMobile = document.getElementById('menu-mobile');

function toggleMenu(){
  let nav = document.getElementById('nav');
  nav.classList.toggle('on');
}

btnMobile.addEventListener('click', toggleMenu);

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.center #nav ul li');

window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;   
    if(pageYOffset > sectionTop){
      current = section.getAttribute('id');
    } 
  })

  navLi.forEach( li =>{
    li.classList.remove('liActive');
    if(li.classList.contains(current)){
      li.classList.add('liActive')
    }
  })
})


              // JQuery (Acoordions)


$(".g1").click(()=> {
  $(".a1").slideToggle(200)
})

$(".g2").click(()=> {
  $(".a2").slideToggle(200)
})

$(".g3").click(()=> {
  $(".a3").slideToggle(200)
})