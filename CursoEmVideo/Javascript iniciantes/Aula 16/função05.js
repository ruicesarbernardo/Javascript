function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(4))


/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!

sendo que o facotial de 1 é 1
1! = 1
*/