const carousel_img = document.querySelector(".carousel__image")
const carousel_FORWARD = document.querySelector(".carousel__forwardButton")
const carousel_BACK = document.querySelector(".carousel__backButton")
const IMAGES = ["https://placekitten.com/300", "https://picsum.photos/300/300"]

var index = 0
carousel_img.src = IMAGES[index]

carousel_FORWARD.addEventListener("click", shuffleForward)
carousel_BACK.addEventListener("click", shuffleBack)
carousel_img.addEventListener('animationed', animEnd)

function shuffleForward(event) {
    index++
    if (index == IMAGES.length - 1) {
        index = 0
        
        carousel_img.classList.add('animate__fadeOutRight')
}

}
function shuffleBack(event) {
    index--
    if (index < 0) {
        index = IMAGES.length - 1
    }
    carousel_img.classlist-addEventListener('animate__fadeOutleft')
}

function animEnd(amin){
    carousel_img.classlist.remove(carousel_img.classlist[3])
    carousel_img.classlist.remove(carousel_img.classlist[2])
    
setTimeout(() => {
    carousel_img.src = IMAGES[index]

}, 1);

    if (anim.animationName == 'fadeoutRight'){
    carousel_img.classlist.add('animate__fadeInLeft')

    }else if (anim.animationName == 'fadeOutLeft'){
    carousel_img.classlist.add("animate__fadeInRight")
    }
}

