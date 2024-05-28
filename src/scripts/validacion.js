document.getElementById("archivoImagen").onchange = function () {
    var archivo = this.files[0];
    if (archivo.size > 1048576) {
        // Tamaño máximo de 2MB
        alert("El archivo debe ser menor a 2MB.");
        this.value = ""; // Limpia el campo
    }
};