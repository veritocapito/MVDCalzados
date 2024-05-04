//ScrolltoTop
addEventListener('DOMContentLoaded', ()=> {
    const btnIrArriba = document.getElementById('btn-ir-arriba');

    const obtenerUbicacion = () => document.documentElement.scrollTop || document.body.scrollTop;
    
    const indicarScroll = () => {
        if (obtenerUbicacion() > 50) {
            btnIrArriba.classList.remove('oculto')
        } else {
            btnIrArriba.classList.add('oculto')
        }
    }

    window.addEventListener('scroll', indicarScroll)
})




//Slider
const slider = document.querySelector('.slider-container')
const puntos = document.querySelectorAll('.punto')

puntos.forEach( (cadaPunto, i) => {

    puntos[i].addEventListener('click', () =>{
        let posicion = i
        let calculo = posicion * -25

        slider.style.transform = `translateX(${calculo}%)`

        puntos.forEach((cadaPunto, i) =>{
            puntos[i].classList.remove('activo')
        })
        puntos[i].classList.add('activo')
    })
})

