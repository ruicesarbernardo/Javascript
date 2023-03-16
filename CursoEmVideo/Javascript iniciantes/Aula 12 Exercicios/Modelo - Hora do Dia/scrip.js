function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
  
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bomdia
        img.src = 'fotomanha.png'
        document.body.style.background = '#f8e2b1'
    } else if (hora >=12 && hora <18) {
        //boatarde
        img.src = 'fototarde.png'
        document.body.style.background ='#92b6cc'
    } else  {             //if (hora >= 18)
        //boanoite
        img.src = 'fotonoite.png'
        document.body.style.background = '#bf8bb8'
    }        

}