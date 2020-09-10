document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

/**
ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".social", { delay: 500 });


respuesta = "";
respuestaCorrecta = "El Camaleon";
*/
respuesta = "";
respuestaCorrecta = "El Camaleon"
intentos = 0;

function adivinanza2() {


    for (let contadorR = 0; contadorR < 5; contadorR++) {
        respuesta = document.getElementById("rtaObtenida").value;
        //console.log(respuesta);
        if (respuesta === this.respuestaCorrecta) {
            document.getElementById("botonIntento").disabled = "true";
            document.getElementById("rtaObtenida").disabled = "true";
            document.getElementById("ganaste").innerHTML = `<h2>¡Felicitaciones!    Ganaste !!!!! <h2>`;
            console.log("ganaste");
            break;

        } else {
            intentos++;
            this.Pista(intentos);
            break;

        }
    }
}

function Pista(cont) {
    if (respuesta != this.respuestaCorrecta && cont == 1) {
        console.log("Intento 1");
        document.getElementById("cantidadOp").innerHTML = `<h3> Intento n° : </h3>` + cont + `<h3> de 3 </h3>`;

    } else if (respuesta != this.respuestaCorrecta && cont == 2) {
        console.log("Intento 2 Primer pista");

        return (document.getElementById("Pista1").innerHTML = `<h3>Pista 1 : Puede cambiar de color </h3>`);

    } else if (respuesta != this.respuestaCorrecta && cont == 3) {
        console.log("intento 3 Segunda pista");

        return (document.getElementById("Pista2").innerHTML = `<h3> Pista 2 : Cada pata tiene tres dedos </h3>`);

    } else if (respuesta != this.respuestaCorrecta && cont == 4) {
        console.log("intento 4 Perdiste");
        document.getElementById("botonIntento").disabled = "true";
        document.getElementById("rtaObtenida").disabled = "true";
        return (document.getElementById("perdiste").innerHTML = `<h3> Perdiste la respuesta conrrecta es El Camaleon </h3>`);
    }
}

document.getElementById("botonIntento").onclick = function() { adivinanza2(); };