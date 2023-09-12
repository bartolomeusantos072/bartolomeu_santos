document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "usuario@gmail.com" && password === "123456") {
            window.location.href = "modal.html";
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});
