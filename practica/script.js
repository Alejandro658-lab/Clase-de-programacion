const preciosUL = document.getElementById("preciosUL");

async function CargarPrecios() {
    const res = await fetch('precios.json');
    const precios = await res.json();
    precios.forEach(p) => {
        preciosUL.innerHTML = 
        `]<li>${p.name} <span>$ ${p.price} </span> </li>`
    };
}