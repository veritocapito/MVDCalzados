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

