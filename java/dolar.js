const dataBank = document.querySelector("#idDolarBlue")

const infoDolar = () => {

    fetch('https://dolarapi.com/v1/dolares/blue')
        .then((response) => response.json())
        .then((data) => {

            const content = document.createElement("div");
            content.innerHTML = `
            <h5><b>Los precios cotizan en base al Dolar Blue</b></h5>
            <h4> Compra: $${data.compra} Venta: $${data.venta}</h4>
            `

            dataBank.append(content);

        })

}
infoDolar();
