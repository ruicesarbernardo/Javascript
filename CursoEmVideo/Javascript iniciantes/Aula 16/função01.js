function parimpar (n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

let res = parimpar(4)   //pode ser
console.log(res)        //assim

console.log(parimpar(4)) //ou pode ser assim