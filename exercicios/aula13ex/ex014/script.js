function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()      
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        window.document.body.style.background = '#dccbae'
        msg.style.color = '#8F7F63'
        msg.style.font = 'normal 1.8em Morning'
        msg.innerHTML += 'da manhã.'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        window.document.body.style.background = '#e38e41'
        msg.style.color = '#96571D'
        msg.style.font = 'normal 1.8em afternoon2'
        msg.innerHTML += 'da tarde'
    }else{
        img.src = 'noite.png'
        window.document.body.style.background = '#65425b'
        msg.style.color = '#B3629C'
        msg.style.font = 'bold 1em Arial'
        msg.innerHTML += 'da noite'
    }
}


