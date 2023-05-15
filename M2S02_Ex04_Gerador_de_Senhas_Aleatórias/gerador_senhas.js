const geradorDeSenhas = (tamanho) => {
    const upperLetters = "QWERTYUIOPASDFGHJKLÇZXCVBNM"
    const lowerLatters = "qwertyuiopasdfghjklçzxcvbnm"
    const number = "0123456789"
    const character = upperLetters + lowerLatters + number
    
    let senha = ""

    for(let i = 0; i < tamanho; i++){
        const index = Math.floor(Math.random()*character.length)
        senha = senha + character[index]
    }
    return senha
}

module.exports = geradorDeSenhas