let num = document.querySelector('input#inum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement(`option`)
       item.text = (`O número ${num.value} foi adicionado`)     
       lista.appendChild(item)
       res.innerHTML = '' //limpar a finalização para criar nova quando inserir novos números
    } else {
        window.alert('Número inválido ou repetido')
    }
    num.value = '' // depois de executar a function anterior, recebe vazio, ele limpa
    num.focus()    //consequentemente o foco da aplicação, campo selecionado, é tbm ativado
 }

function finalizar() {
    if (valores == 0) {
        window.alert('Adicionar pelo menos 1 número')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        
        media = soma / tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Temos no total ${tot} números adicionados.</p>`
        res.innerHTML += `<p>O maior valor inserido foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor inserido foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores adicionados é de ${soma} </p>`
        res.innerHTML += `<p>A média de todos os valores adicionados é de ${media} </p>`
    }
}