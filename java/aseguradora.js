const marcaInput = document.getElementById("marca");
const modeloInput = document.getElementById("modelo");
const anioInput = document.getElementById("anio");
const valorInput = document.getElementById("valor");
const calcularButton = document.getElementById("calcular");
const resultadoDiv = document.getElementById("resultado");

calcularButton.addEventListener("click", function() {
    const marca = marcaInput.value;
    const modelo = modeloInput.value;
    const anio = parseInt(anioInput.value);
    const valor = parseInt(valorInput.value);
    
    if (!marca || !modelo || isNaN(anio) || isNaN(valor)) {
        resultadoDiv.innerHTML = "Ingresa datos válidos en todos los campos.";
        return;
    }
    if (anio < 1999 || anio > 2023) {
        resultadoDiv.innerHTML = "Ingresa un año válido en el rango de 1999 a 2023.";
        return;
    }
    const tasaBase = 0.03; 
    const incrementoAnio = anio > 2000 ? 0.1 : 0.03; 
    const prima = valor * (tasaBase + incrementoAnio);


resultadoDiv.innerHTML = `El costo del seguro para ${marca} ${modelo} (${anio}) es $${prima.toFixed(2)}`;
});
