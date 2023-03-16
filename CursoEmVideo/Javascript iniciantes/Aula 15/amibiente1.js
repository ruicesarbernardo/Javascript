let num = [1, 3, 2]

num[1]= 9 //colocar o número 9 na posição [1]
num.sort() //colocar em ordem crescente
num.push(7) //acrescentar elemento na última posição

console.log(num)
console.log(`O vector tem ${num.length} elementos`)
console.log(`O segundo elemento do vector é ${num[1]}`)

let pos = num.indexOf(2) //para nos indicar em que indíce/chave/key está o valor 2
if (pos == -1) {         //se o resultado for -1 é porque o 8 não está presente 
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`) 
}
