function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.querySelector('input#txtano');
    var fAnoN = Number(fAno.value);
    var res = document.querySelector('div#res');
    if (fAnoN < 1000 || fAnoN > ano){
        alert('[ERRO] Verifique os dados inseridos');
    }else{
        var idade = ano - fAnoN;
        var fSex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fSex[0].checked){
            genero = 'Homem'
            if (idade > 0 && idade < 14){
                img.setAttribute('src','crianca-m.png');
            }else if (idade < 21){
                img.setAttribute('src','jovem-m.png');
            }else if(idade < 50){
                img.setAttribute('src','adulto-m.png');
            }else{
                img.setAttribute('src','idoso-m.png');
            }
        }else if (fSex[1].checked){
            genero = 'Mulher'
            if (idade > 0 && idade < 14){
                img.setAttribute('src','crianca-f.png');
            }else if (idade < 21){
                img.setAttribute('src','jovem-f.png');
            }else if(idade < 50){
                img.setAttribute('src','adulto-f.png');
            }else{
                img.setAttribute('src','idoso-f.png');
            }
        } 
        
        res.style.textAlign = 'center'
        img.style.marginTop = '20px'
        res.innerHTML = `<strong>${genero} com idade ${idade} anos.</strong><br>`
        res.appendChild(img)
    }
}
    


