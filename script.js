const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carousel) => {
  const slide = carousel.querySelector('.carousel-slide');
  const images = carousel.querySelectorAll('.carousel-slide img');
  const prevBtn = carousel.querySelector('.prevBtn');
  const nextBtn = carousel.querySelector('.nextBtn');

  let counter = 0;
  const slideWidth = images[0].clientWidth;

  function slideNext() {
    counter = (counter + 1) % images.length;
    slide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }

  function slidePrev() {
    counter = (counter - 1 + images.length) % images.length;
    slide.style.transform = `translateX(${-slideWidth * counter}px)`;
  }

  prevBtn.addEventListener('click', slidePrev);
  nextBtn.addEventListener('click', slideNext);

  function startCarousel() {
    setInterval(slideNext, 10000);
  }

  startCarousel();
});