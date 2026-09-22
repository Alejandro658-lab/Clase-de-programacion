const utilesUL = document.getElementById("utilesUL");

async function cargarConcierto(){
    const res = await fetch('script.json');
    const concerts = await res.json();
    concerts.forEach(u => {
        utilesUL.innerHTML +=
        `<li>${u.util}<Span>$ ${u.price}</Span></li>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarConcierto(); 
});