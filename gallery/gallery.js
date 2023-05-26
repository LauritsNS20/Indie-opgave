const CAROUSEL_IMG = document.querySelector(".carousel__image")
const CAROUSEL_FORWARD = document.querySelector(".carousel__forwardButton")
const CAROUSEL_BACK = document.querySelector(".carousel__backButton")

const IMAGES = [""]

var index = 0
CAROUSEL_IMG.src = IMAGES[index]

CAROUSEL_FORWARD.addEventListener("click", shuffleforward)
CAROUSEL_BACK.addEventListener("click", shuffleback)

function shuffleforward(event) {
    index++
    if (IMAGES.length == index) {
        index = 0
    }
  CAROUSEL_IMG.src = IMAGES[index]
}

function shuffleback(event) {
    index--
    if(index < 0) {
       index = IMAGES.length - 1
    }
    CAROUSEL_IMG.src = IMAGES[index]
  }