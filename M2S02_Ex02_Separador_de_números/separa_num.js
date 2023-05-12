const separadorDeNumeros = (arrayDeNumeros, opcao) => {
    //Lógica
    let arrayImpares = []
    let arrayPares = []
    
    for (let i = 0; i<arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] % 2 == 1){
            arrayImpares.push(arrayDeNumeros[i])
        }else{
            arrayPares.push(arrayDeNumeros[i])
        }
    }

    if(opcao == 1){
        return arrayImpares
    }else if (opcao == 2){
        return arrayPares
    }else if (opcao == 3){
        return {arrayImpares, arrayPares}
    }else {
        return "Opção Inválida!"
    }
}

module.exports = separadorDeNumeros