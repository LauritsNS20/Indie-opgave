//
const IMAGE_SLIDERS = document.querySelector(".image-sliders")
const BUTTONS_FOR_SLIDER = document.querySelectorAll(".buttons-for-slider")

//document.addEventListener("click",goToNexstSliders)


BUTTONS_FOR_SLIDER.forEach((button, index) => button.addEventListener("click", () => goToNextSliders(index)))





//
function goToNextSliders(buttonIndex){
    const SLIDERS_WIDTH = IMAGE_SLIDERS.getBoundingClientRect().width 
    console.log(SLIDERS_WIDTH)
    IMAGE_SLIDERS.scrollTo({left:SLIDERS_WIDTH * buttonIndex, behavior:"smooth"})
}