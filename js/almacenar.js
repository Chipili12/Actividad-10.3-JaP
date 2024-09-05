// Agrega los items de local storage al cargar
let donde = document.getElementById("contenedor");
let nuevoJ = JSON.parse(localStorage.getItem("local")) || [];

document.addEventListener("DOMContentLoaded", function () {

    nuevoJ.forEach(nuevo => {
        const li = document.createElement("li");
        li.classList.add("list-group-item")
        li.textContent = nuevo;
        donde.appendChild(li);
    });

});


// Boton agregar
document.getElementById("agregar").addEventListener("click", function () {
    let nuevo = document.getElementById("item").value; // item nuevo

    if (nuevo !== "") {
        nuevoJ.push(nuevo),
            li = document.createElement("li"),
            li.classList.add("list-group-item"),
            li.textContent = nuevo,
            donde.appendChild(li),
            localStorage.setItem("local", JSON.stringify(nuevoJ))
    }
    else alert("Ingresa un item");


    document.getElementById("item").value = "";

})

//Botón borrar
document.getElementById("limpiar").addEventListener("click", function () {

    donde.innerHTML = "";
    localStorage.removeItem("local")

})