document.getElementById("texto").innerHTML='Meu primeiro texto <b>JS</b>!';
console.log('isto é um console.log')

function eventC1() {
    alert('Clicou');
}

function vermelho() {
    let div = document.getElementById('div1');
    div.style.backgroundColor = 'red';
}
function branco() {
    let div = document.getElementById('div1');
    div.style.backgroundColor = 'white';
}
function limpaTexto() {
    document.getElementById('texto1').value = "";
}
