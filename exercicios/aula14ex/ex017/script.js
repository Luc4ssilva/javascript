function tabuada(){
    let num = document.querySelector('input#txtn');
    let tab = document.getElementById('seltab');
    tab.innerHTML = ''
    if(num.value.length == 0){
        alert('Por favor, digite um número!');
    }else{
        let n = Number(num.value);
        for(let c = 1; c <= 10; c++){
             tab.innerHTML += `<option>${n} x ${c} = ${n*c}</option>`
        }
    }
    
}