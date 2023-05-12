const separadorDeNumeros = require('./separa_num')

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayImpares = separadorDeNumeros(num, 1)
const arrayPares = separadorDeNumeros(num, 2)
const impar_par = separadorDeNumeros(num, 3)

console.log(arrayImpares)
console.log(arrayPares)
console.log(impar_par)