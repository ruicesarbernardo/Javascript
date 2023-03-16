function soma (n1, n2) {
    return n1 + n2  
}
console.log(soma(2, 5))

//se não dermos o segundo parametro vai dar NaN (not a number) / erro, então há forma de resolver

function soma (n1=0, n2=0) {  //quando falta um parâmetro, esse fica a valer nada (=0) e assim é executado o dado por nada(=0)
    return n1 + n2  
}
console.log(soma(2))