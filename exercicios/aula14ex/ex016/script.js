function contar(){
var c = document.querySelector('input#inicio');
var f = document.getElementById('fim');
var p = document.getElementById('passo');
var res = document.querySelector('div#res');
c1 = Number(c.value);
f1 = Number(f.value);
p1 = Number(p.value);
if(c1 == 0 || f1 == 0 || p1 == 0){
        alert('[ERRO] Faltam dados!')
}else if(p <= 0){
        window.alert('Passo inválido! Considerando passo 1')
        p1 = 1
}
else if(c1 <= f1){
        res.innerHTML = 'Contando: '
        for(var r = c1; r <= f1; r += p1){
        res.innerHTML += `${r} `
 }     
}else {
        res.innerHTML = 'Contando: '
        for(var r = c1; r >= f1; r -= p1){
                res.innerHTML += `${r} `
        }
}

}