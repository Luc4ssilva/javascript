let n = window.document.getElementById('fnum');
let n1 = Number(fnum.value);
let lista = document.querySelector('select#flista');
let res = document.getElementById('res');
let valores = [];


function adicionar(){
    if(n1 < 1 || n1 > 100){
        alert('Número invalido ou ja inserido na lista');
    }else{
        var val = valores.push(n1);
    lista.innerHTML = `<option>Valor ${n1} adicionado</option>`
    }
    
}
