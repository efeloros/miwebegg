// JavaScript para mostrar la frase
function mostrarFrase() {
    const frase = "¡Hola, este es un mensaje de prueba probando conexión!";
    document.getElementById('frase').textContent = frase;
    document.getElementById('frase').style.fontSize='30px';
}

// Llama a la función cuando se carga la página
window.onload = mostrarFrase;