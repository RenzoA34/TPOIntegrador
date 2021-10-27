document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form_button").addEventListener("click", (e) => {
        e.preventDefault();
        user = document.getElementById("form_user");
        email = document.getElementById("form_email");
        msg = document.getElementById("form_message");
        if (user.value.length < 3 || user.length > 20) {
            alert("Por favor ingrese un nombre válido");
            console.log(user);
            return;
        }
        emailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegex.test(email.value)) {
            alert("Por favor ingrese un email válido");
            return;
        }
        if (msg.value.length < 6) {
            alert("Por favor ingrese un mensaje válido");
            return;
        }
        alert("Formulario enviado con éxito");
        user.value = "";
        email.value = "";
        msg.value = "";
    });
});