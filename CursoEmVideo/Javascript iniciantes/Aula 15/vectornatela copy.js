let valores = [8, 1, 7, 4, 2, 9, 6, 5]
valores.sort()
valores.push(3)
/*
for( let pos = 0 ; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
//SIMPLIFICANDO

for ( pos in valores) {    
    
// for(___ in ___) Primeiro a variável da posição (pos) e depois a variavel do vector
// Lê-se, para cada posição dentro de 'vector', eu vou mostrar (console.log) o 'vector'[pos]                          

    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
//console.log(valores.indexOf(4))  //Para encontrar o indíce do valor 4

pos = valores.indexOf(11)
 if (pos === -1) {
    console.log('Náo existe o valor pedido')
 } else {
    console.log(`O valor está na posição ${pos}`)
 }
