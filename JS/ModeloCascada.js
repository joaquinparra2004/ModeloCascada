function desencriptar() {
    let num = document.getElementById("numero").value;
    let mensaje = document.getElementById("mensaje");
    let titulo_mensaje = document.getElementById("titulo-mensaje");

    if (num >= 0001 && num <= 9999) {
        numero_Desicifrado = num
            .replace(num.slice(2, 3), (+num.slice(0, 1) + 3) % 10)
            .replace(num.slice(3, 4), (+num.slice(1, 2) + 3) % 10)
            .replace(num.slice(0, 1), (+num.slice(2, 3) + 3) % 10)
            .replace(num.slice(1, 2), (+num.slice(3, 4) + 3) % 10);
        
        mensaje.textContent = numero_Desicifrado;
        titulo_mensaje.textContent = "Número desencriptado correctamente";
    } 
    
    else {
        alert("No has ingresado ningún número válido.");
    }
}
function encriptar() {
    let num = document.getElementById("numero").value;
    let mensaje = document.getElementById("mensaje");
    let titulo_mensaje = document.getElementById("titulo-mensaje");

    if (num >= 0001 && num <= 9999) {
        numero_Cifrado = num
            .replace(num.slice(0, 1), (+num.slice(2, 3) + 7) % 10)
            .replace(num.slice(1, 2), (+num.slice(3, 4) + 7) % 10)
            .replace(num.slice(2, 3), (+num.slice(0, 1) + 7) % 10)
            .replace(num.slice(3, 4), (+num.slice(1, 2) + 7) % 10);
        
        mensaje.textContent = numero_Cifrado;
        titulo_mensaje.textContent = "Número encriptado correctamente";
    } 
    
    else {
        alert("No has ingresado ningún número válido.");
    }
}
