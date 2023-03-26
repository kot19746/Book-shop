export function bannerSlider(){

const leBanner = document.querySelectorAll('.slider-image');
const sliderPoint = document.querySelectorAll('.slider-point');

let currentSlide = 0;
let currentDot = 0;

function showSlider(){
  leBanner[currentSlide].classList.remove('slider-image-active');
  currentSlide = (currentSlide + 1) % leBanner.length;
  leBanner[currentSlide].classList.add('slider-image-active');
  
  sliderPoint[currentDot].classList.remove('slider-point-active');
  currentDot = (currentDot + 1) % sliderPoint.length;
  sliderPoint[currentDot].classList.add('slider-point-active');
}

let interval = setInterval(showSlider, 5000);

sliderPoint.forEach((dot, index) => {
  dot.style.cursor = "pointer";
  dot.addEventListener('click', () => {
    
    leBanner.forEach((slide) => {
      slide.classList.remove('slider-image-active');
      
    })
    sliderPoint.forEach((dot) => {
      dot.classList.remove('slider-point-active');
      
    })

    leBanner[index].classList.add('slider-image-active');
    sliderPoint[index].classList.add('slider-point-active');

    currentSlide = index;
    currentDot = index;

    clearInterval(interval);
    interval = setInterval(showSlider, 5000);
  })
})
}


