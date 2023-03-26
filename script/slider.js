const sliderImages = document.querySelectorAll('.main__slider__image');
const sliderDots = document.querySelectorAll('.main__slider__dot');


let currentSlide = 0;
let currentDot = 0;


function automaticSlider(){
  sliderImages[currentSlide].classList.remove('main__slider__image--active');
  currentSlide = (currentSlide + 1) % sliderImages.length;
  sliderImages[currentSlide].classList.add('main__slider__image--active');
  
  sliderDots[currentDot].classList.remove('main__slider__dot--active');
  currentDot = (currentDot + 1) % sliderDots.length;
  sliderDots[currentDot].classList.add('main__slider__dot--active');
}


let interval = setInterval(automaticSlider, 5000);

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    
    sliderImages.forEach((slide) => {
      slide.classList.remove('main__slider__image--active');
      
    })
    sliderDots.forEach((dot) => {
      dot.classList.remove('main__slider__dot--active');
      
    })

    sliderImages[index].classList.add('main__slider__image--active');
    sliderDots[index].classList.add('main__slider__dot--active');

    currentSlide = index;
    currentDot = index;

    clearInterval(interval);
    interval = setInterval(automaticSlider, 5000);
  })
})

