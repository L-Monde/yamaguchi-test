
const buttonUp = document.querySelector(".button__up")
const buttonDown = document.querySelector(".button__down")
const tablePic = document.querySelector(".ergo__image-top")
let counter = 0

function tableUp() {
    if (counter < 2) {
        counter += 1
        gsap.to(tablePic, {
            y: "-=35",
        })
        buttonDown.classList.remove('button-disabled')
    } else {
        buttonUp.classList.add('button-disabled')
        return
    }

}
function tableDown() {
    if (counter > -3) {
        counter -= 1
        gsap.to(tablePic, {
            y: "+=35",
        })
        buttonUp.classList.remove('button-disabled')
    } else {
        buttonDown.classList.add('button-disabled')
        return
    }
}

buttonUp.addEventListener('click', tableUp)
buttonDown.addEventListener('click', tableDown)

gsap.from(".voice__image-person", {
    y: "+=700",
    scale: .6,
    duration: 4,
})