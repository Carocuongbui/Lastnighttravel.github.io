// slider-show
// var i = 0;
// var images = [];
// var time = 3200;

// images[0] = './assets/style/img/Slider-img/image 26.png'
// images[1] = './assets/style/img/Slider-img/image 27.png'
// images[2] = './assets/style/img/Slider-img/image 28.png'

// function slider_show() {
//   doccument.img__slider.src = images[i];
//   if(i < images.length - 1) {
//     i++;
//   }
//   else {
//     i = 0;
//   }
//   setTimeout("slider_show()", time);
// }
// window.onload = slider_show;

// setInterval(function() {
//   var slides = document.querySelectorAll(".img__slider");
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   var currentSlide = (parseInt(document.querySelector(".img__slider:first-child").style.zIndex) + 1) % slides.length;
//   slides[currentSlide].style.display = "block";
//   slides[currentSlide].style.zIndex = currentSlide;
// }, 4000);

function carousel() {
  var x = document.getElementsByClassName("img__slider");
  if (x.length === 0) {
    return;
  }
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

const btn1 = document.querySelector(".item__sli2--animation_1");
const btn2 = document.querySelector(".item__sli2--animation_2");
const btn3 = document.querySelector(".item__sli2--animation_3");
const bg1 = document.querySelector(".bg__item--theme_1");
const bg2 = document.querySelector(".bg__item--theme_2");
const bg3 = document.querySelector(".bg__item--theme_3");

btn1.addEventListener("click", () => {
  bg1.style.display = "block";
  bg2.style.display = "none";
  bg3.style.display = "none";
});

btn2.addEventListener("click", () => {
  bg1.style.display = "none";
  bg2.style.display = "block";
  bg3.style.display = "none";
});

btn3.addEventListener("click", () => {
  bg1.style.display = "none";
  bg2.style.display = "none";
  bg3.style.display = "block";
});
end;

var slides = document.getElementsByClassName("bg__itemtheme");

var currentSlideIndex = 0;
function showNextSlide() {
  slides[currentSlideIndex].style.display = "none ";
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  slides[currentSlideIndex].style.display = "block";
}
slides[currentSlideIndex].style.display = "block";
setInterval(showNextSlide, 4000);
// end
