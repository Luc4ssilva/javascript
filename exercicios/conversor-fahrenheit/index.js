
function clicou(){
    var valor = document.querySelector('input#txtfar');
    var valor1 = Number(valor.value);
    var res = document.querySelector('div#res');
    var resultado = (5 / 9) * (valor1 - 32);
    res.innerHTML = `A temperatura é de <strong>${resultado.toFixed(3)}</strong> graus celsius`;
}