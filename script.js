function buscar() {
    let input = document.getElementById("searchInput").value.toUpperCase();
    let table = document.getElementById("dataTable");
    let tr = table.getElementsByTagName("tr");
    let encontrado = false;

    for (let i = 1; i < tr.length; i++) {
        let tdNombre = tr[i].getElementsByTagName("td")[1];
        let tdInicio = tr[i].getElementsByTagName("td")[2];
        let tdFinal = tr[i].getElementsByTagName("td")[3];
        let tdAula = tr[i].getElementsByTagName("td")[4];
        let tdMesa = tr[i].getElementsByTagName("td")[0];

        if (tdNombre && tdInicio && tdFinal) {
            let nombreTexto = tdNombre.textContent.toUpperCase();
            let inicioTexto = tdInicio.textContent.toUpperCase();
            let finalTexto = tdFinal.textContent.toUpperCase();

            if (nombreTexto.includes(input) || inicioTexto.includes(input) || finalTexto.includes(input)) {
                document.getElementById("resultado").innerText = 
                    `Nombre encontrado en la mesa ${tdMesa.textContent}, Aula ${tdAula.textContent}`;
                encontrado = true;
                break;
            }
        }
    }

    if (!encontrado) {
        document.getElementById("resultado").innerText = "No se encontró el nombre en la lista.";
    }
}

function toggleTable() {
    const tableContainer = document.getElementById("tableContainer");
    const toggleButton = document.getElementById("toggleButton");
    
    if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block";
        toggleButton.textContent = "Ocultar Tabla";
    } else {
        tableContainer.style.display = "none";
        toggleButton.textContent = "Mostrar Tabla Completa";
    }
}