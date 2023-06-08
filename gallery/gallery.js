// here caller vi på hvors elementer med classer/  IKKE SE BARE CLASSER
const IMAGE_SLIDERS = document.querySelector(".image-sliders")
const BUTTONS_FOR_SLIDER = document.querySelectorAll(".buttons-for-slider")


//document.addEventListener("click",goToNexstSliders)
//here for jeg buttonen til at kunne klike og gør at buttonsne virkere/ here kaller vi på hvors function med index
BUTTONS_FOR_SLIDER.forEach((button, index) => button.addEventListener("click", () => goToNextSliders(index)))





// here har vi hvors function 
function goToNextSliders(buttonIndex){
    const SLIDERS_WIDTH = IMAGE_SLIDERS.getBoundingClientRect().width 
    console.log(SLIDERS_WIDTH)
    IMAGE_SLIDERS.scrollTo({left:SLIDERS_WIDTH * buttonIndex, behavior:"smooth"})
}