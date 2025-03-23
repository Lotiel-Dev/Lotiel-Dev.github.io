function buscar() {
    let input = document.getElementById("searchInput").value.trim();
    if (!input) {
        document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre y apellidos para buscar.";
        return;
    }
    
    const palabras = input.split(' ');
    
    if (palabras.length < 2) {
        document.getElementById("resultado").innerText = "Por favor, ingresa tu nombre completo con apellidos.";
        return;
    }
    
    let nombre = palabras[0];
    let apellido1 = "";
    let apellido2 = "";
    
    if (palabras.length === 2) {
        apellido1 = palabras[1];
    } 
    else if (palabras.length === 3) {
        apellido1 = palabras[1];
        apellido2 = palabras[2];
    }
    else if (palabras.length >= 4) {
        apellido2 = palabras[palabras.length - 1];
        apellido1 = palabras[palabras.length - 2];
        nombre = palabras.slice(0, palabras.length - 2).join(' ');
    }
    
    console.log("Nombre:", nombre);
    console.log("Apellido 1:", apellido1);
    console.log("Apellido 2:", apellido2);
    
    apellido1 = normalizarTexto(apellido1);
    apellido2 = normalizarTexto(apellido2);

    console.log(apellido1, apellido2);

    // Casos específicos con dos apellidos
    if (apellido1 === "CAMACHO" && apellido2 === "HUANCA") {
        mostrarResultado("507", "4");
    }
    else if (apellido1 === "CAMACHO" && apellido2 === "KOYO") {
        mostrarResultado("508", "5");
    }
    else if (apellido1 === "CUENCA" && apellido2 === "FELIPE") {
        mostrarResultado("508", "5");
    }
    else if (apellido1 === "CUENTAS" && apellido2 === "AGUILAR") {
        mostrarResultado("509", "6");
    }
    else if (apellido1 === "HUANCA" && apellido2 === "LUMPE") {
        mostrarResultado("509", "6");
    }
    else if (apellido1 === "HUANCA" && apellido2 === "MAMANI") {
        mostrarResultado("512", "7");
    }
    else if (apellido1 === "MENDOZA" && apellido2 === "CHOQUE") {
        mostrarResultado("512", "7");
    }
    else if (apellido1 === "MENDOZA" && apellido2 === "COLQUE") {
        mostrarResultado("512", "8");
    }
    else if (apellido1 === "QUISPE" && apellido2 === "GUSMAN") {
        mostrarResultado("512", "8");
    }
    else if (apellido1 === "QUISPE" && apellido2 === "HUANCA") {
        mostrarResultado("513", "9");
    }
    else if (apellido1 === "TARQUI" && apellido2 === "VARGAS") {
        mostrarResultado("513", "9");
    }
    else if (apellido1 === "TEJERINA" && apellido2 === "CHACA") {
        mostrarResultado("514", "10");
    }
    else if (apellido1 === "ZURITA" && apellido2 === "VEIZAGA") {
        mostrarResultado("514", "10");
    }
    // Para apellidos que no están específicamente en la lista
    else {
        // Asignar mesa basada en primer apellido
        asignarMesaPorApellido(apellido1);
    }
}

// Función para asignar mesa según rango alfabético del apellido
function asignarMesaPorApellido(apellido) {
    if (apellido === "ZURITA") {
        mostrarResultado("514", "10");
    }
    else if (apellido >= "A" && apellido < "CAMACHO") {
        mostrarResultado("507", "4");
    }
    else if (apellido >= "CAMACHO" && apellido < "CUENTAS") {
        mostrarResultado("508", "5");
    }
    else if (apellido >= "CUENTAS" && apellido < "HUANCA") {
        mostrarResultado("509", "6");
    }
    else if (apellido >= "HUANCA" && apellido < "MENDOZA") {
        mostrarResultado("512", "7");
    }
    else if (apellido >= "MENDOZA" && apellido < "QUISPE") {
        mostrarResultado("512", "8");
    }
    else if (apellido >= "QUISPE" && apellido < "TEJERINA") {
        mostrarResultado("513", "9");
    }
    else if (apellido >= "TEJERINA" && apellido <= "Z") {
        mostrarResultado("514", "10");
    }
    else {
        document.getElementById("resultado").innerText = "No se pudo determinar tu mesa. Por favor, consulta la tabla completa.";
    }
}

// Función para mostrar el resultado en la página
function mostrarResultado(aula, mesa) {
    document.getElementById("resultado").innerHTML = 
        `<strong>Tu aula es: ${aula}</strong><br>
         <strong>Tu mesa es: ${mesa}</strong>`;
    console.log("Aula:", aula, "Mesa:", mesa);
}

// para igualar los nombre todos a mayuscula
function normalizarTexto(palabra) {
    if (!palabra) return "";
    const sinAcentos = palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return sinAcentos.toUpperCase();
}

//para mostrar la tabla de mesas
function toggleTable() {
    const tableContainer = document.getElementById("tableContainer");
    const toggleButton = document.getElementById("toggleButton");
    
    if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block";
        toggleButton.textContent = "Ocultar Tabla";
    } else {
        tableContainer.style.display = "none";
        toggleButton.textContent = "Mostrar Tabla de mesas";
    }
}