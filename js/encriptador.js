function encriptar(texto) {
    // Marcar error si de detecta una mayúscula o una vocal con acento
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
        throw new Error('El texto no puede contener mayúsculas o vocales acentuadas');
    } else {
        // Encriptar el texto al detectar una letra e y canviarla por "enter", cambiar la letra i por "imes", cambiar la letra a por "ai", cambiar la letra o por "ober" y cambiar la letra u por "ufat"
        return texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    }
}

function desencriptar(texto) {
    // Desencriptar el texto al detectar "enter" y cambiarlo por e, cambiar "imes" por i, cambiar "ai" por a, cambiar "ober" por o y cambiar "ufat" por u
    return texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
}

function clickEncriptar() {
    event.preventDefault();
    let texto = document.getElementById('texto').value;
    try {
        let textoEncriptado = encriptar(texto);
        // Agregar un parrafo con el texto encriptado al div con clase "resultado"
        let resultado = document.querySelector('.resultado');
        resultado.innerHTML = '';
        let parrafo = document.createElement('p');
        parrafo.textContent = textoEncriptado;
        resultado.appendChild(parrafo);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

function clickDesencriptar() {
    event.preventDefault();
    let texto = document.getElementById('texto').value;
    let textoDesencriptado = desencriptar(texto);
    // Agregar un parrafo con el texto desencriptado al div con clase "resultado"
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    let parrafo = document.createElement('p');
    parrafo.textContent = textoDesencriptado;
    resultado.appendChild(parrafo);
}

document.getElementById('encriptar').addEventListener('click', clickEncriptar);
document.getElementById('desencriptar').addEventListener('click', clickDesencriptar);