let slides = new Array("gt4bghome.webp", "gtavbghome.jpg", "nfsu2bghome.jpg", "mclsbghome.jpg", "mkabghome.jpg", "mgrrbghome.jpg")
let tamanho = slides.length
let slideAtual = 0
let tempoSlider

function passarSlides() {
    slideAtual++
    if (slideAtual >= tamanho) {
        slideAtual++
    }
    if (slideAtual > 5) {
        slideAtual = 0
    }
    document.querySelector("#slider").style.backgroundImage=`url("${slides[slideAtual]}")`
}

function iniciarSlides() {
    document.querySelector("#slider").style.backgroundImage=`url("${slides[slideAtual]}")`
    tempoSlider = setInterval(passarSlides, 2000)
}
iniciarSlides()