function tabuada() {
    let num = window.document.getElementById('txtn1')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Inserir número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = `` //para antes de calcular limpar o resultado anterior
        while (c <= 10 {
            let item = document.getElementById('option')
            let text = `${n} x ${c} = ${n*c}`
            item value = `tab${c}`
            c++
        })
    }

}