// Script para enviar el formulario a Web3Forms
const form = document.getElementById("form");
const result = document.getElementById("estadoEmail");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Enviando...";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: json
    })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "✅ ¡Mensaje enviado con éxito!";
            } else {
                console.log(response);
                result.innerHTML = "⚠️ " + json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "❌ Ocurrió un error al procesar el formulario.";
        })
        .then(function () {
            form.reset();
            setTimeout(() => { result.innerHTML = ""; }, 4000);
        });
});