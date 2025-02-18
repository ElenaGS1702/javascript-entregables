const frutas = ["manzana", "pera", "naranja", "kiwi", "manzana", "pera", "cereza", "kiwi", "manzana", "uva", "naranja", "melon"]
let tam_frutas = {}

for(i=0; i<frutas.length; i++){
    const fruta = frutas[i]
    if( tam_frutas.hasOwnProperty(fruta) ){
        tam_frutas[fruta] += 1
    } else{
        tam_frutas[fruta] = 1
    }
}

console.log(tam_frutas)