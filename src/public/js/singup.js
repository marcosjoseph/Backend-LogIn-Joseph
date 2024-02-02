//creamos una funcion que vaya a crear el usuario en la base de datos de Mongo

async function postSignup (first_name,last_name,email, password,age) {
    const data = {first_name, last_name,email,password,age}

    const response = await fetch ("/signup", {
        metho:"POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(data),
    });

    const result = await response.json();
    return result;
}

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const first_name = document.getElementById("first_name")
    const last_name = document.getElementById("last_name")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const age = document.getElementById("age")

    const result = await postSignup(first_name,last_name,email, password,age);

    if (result.respuesta === "Usuario creado con exito") {
        window.location.href = "/login";
    } else {alert("Datos Incorrectos")}
})