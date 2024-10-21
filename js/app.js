// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2024 11:00:00").getTime();


var x = setInterval(function () {

  var now = new Date().getTime();

 
  var distance = countDownDate - now;

 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
  days + "d " + hours + "h " + minutes + "m " + seconds + "s ";


if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "Sale Ended";
}
}, 1000);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
