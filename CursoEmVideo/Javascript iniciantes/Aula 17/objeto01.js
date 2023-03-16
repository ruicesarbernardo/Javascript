let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p){
    console.log(`O ${amigo.nome} do sexo ${amigo.sexo} engordou!`)
    this.peso += p
}
}

amigo.engordar(3)
//console.log(amigo.sexo) //se pedir só amigo é respondida toda a informação do amigo, se quisermos só o nome pedimos amigo.nome
console.log(`O meu amigo ${amigo.nome} pesa agora ${amigo.peso} kg`)