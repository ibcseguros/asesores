document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formulario");
    const mensaje = document.getElementById("mensaje-exito");

    const scriptURL = "https://script.google.com/macros/s/AKfycbw9FvbLXx4SRsaOvE1V4Ii2XnllP9VymOt1VrHnoaMFhZpHiUspzZuEl65N3FTcKK_Izw/exec";

    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();

        const datos = {

            nombre: document.getElementById("nombre").value,

            apellido: document.getElementById("apellido").value,

            numero: document.getElementById("numero").value,

            correo: document.getElementById("correo").value,

            seguro: document.getElementById("seguro").value

        };

        try{

            await fetch(scriptURL, {

                method: "POST",

                body: JSON.stringify(datos)

            });

            mensaje.textContent =
                "Un agente se contactará contigo pronto";

            mensaje.style.opacity = "1";

            formulario.reset();

        }catch(error){

            mensaje.textContent =
                "Error al enviar formulario";

            mensaje.style.opacity = "1";

        }

    });

});