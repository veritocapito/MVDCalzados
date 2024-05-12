//ScrolltoTop
addEventListener('DOMContentLoaded', ()=> {
    const btnIrArriba = document.getElementById('btn-ir-arriba');
    const btnWhatsapp = document.getElementById('whatsapp');

    const obtenerUbicacion = () => document.documentElement.scrollTop || document.body.scrollTop;
    
    const indicarScroll = () => {
        obtenerUbicacion() > 50
        ? btnIrArriba.classList.remove('oculto')
        : btnIrArriba.classList.add('oculto')
        
        obtenerUbicacion() > 500
        ? btnWhatsapp.classList.remove('oculto')
        : btnWhatsapp.classList.add('oculto')
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



//Validacion de formulario de contacto
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const consulta = document.getElementById('consulta').value;
    const genero = document.getElementById('genero');
    const talle = document.getElementById('talle').value;
    const imagen = document.getElementById('imagen');

    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || consulta.trim() === '' || talle === '') {
        alert('Por favor, completa todos los campos obligatorios del formulario.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    enviarFormulario(nombre, email, telefono, consulta, genero, talle, imagen,);
});

function enviarFormulario(nombre, email, telefono, consulta, genero, talle, imagen) {

    alert('Formulario enviado correctamente');
    form.reset();
}


