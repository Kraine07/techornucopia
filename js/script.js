var slideIndex = 0;
slide();

function slide() {
  var i;
  var carouselContainer = document.getElementsByClassName("welcome");
  for (i = 0; i < carouselContainer.length; i++) {
    carouselContainer[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > carouselContainer.length) {slideIndex = 1}
  carouselContainer[slideIndex-1].style.display = "block";
  setTimeout(slide, 7000); // Change image every 7 seconds
}

