function contar() {
    var ini = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2')
    var passo = document.getElementById('txtn3')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar, verifique os dados preenchidos.'
        //window.alert('Preencha correntamente os dados pedidos')
    } else {
        res.innerHTML = 'A contar: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Impossível realizar a contagem com Passo 0, será considerado Passo 1.')
            p = 1
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} `
            }
        } res.innerHTML += `. Contagem concluida!`
    } 
     

}