function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length <= 3 || Number(fano.value) > ano) {
        window.alert("Dados errados")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        //res.innerHTML =`Idade calculada: ${idade}` //para testar se havia cálculo
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=4 && idade <12) {
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade >=12 && idade <18) {
                //jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade >= 18 && idade <66) {
                //adulto
                img.setAttribute('src', 'adulto.png')
            } else if (idade >=66) {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=4 && idade <12) {
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade >=12 && idade <18) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade >= 18 && idade <66) {
                //adulto
                img.setAttribute('src', 'adulta.png')
            } else if (idade >=66) {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML =`Detectamos ser ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}