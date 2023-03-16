var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas` )
if (hora < 12) {
    console.log(`Bom dia`)
} else if (hora <= 16) {
    console.log(`Boa tarde`)
} else if (hora > 16 && hora <=22) {
    console.log(`Boa serão`)
} else if (hora > 22) {
    console.log(`Boa noite`)
}