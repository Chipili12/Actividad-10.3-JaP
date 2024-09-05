// Agrega los items de local storage al cargar
document.addEventListener("DOMContentLoaded", function () {

    let donde = document.getElementById("contenedor");
    let nuevoJ = JSON.parse(localStorage.getItem("local")) || [];

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
    let donde = document.getElementById("contenedor");
    let nuevoJ = JSON.parse(localStorage.getItem("local")) || [];

    if (nuevo !== "") {
        nuevoJ.push(nuevo)
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.textContent = nuevo;
        donde.appendChild(li);
        localStorage.setItem("local", JSON.stringify(nuevoJ))
    }
    else {
        alert("Ingresa un item");
    }

    document.getElementById("item").value = "";

})



//Botón borrar
document.getElementById("limpiar").addEventListener("click", function () {

    document.getElementById("contenedor").innerHTML = "";
    localStorage.removeItem("local")

})