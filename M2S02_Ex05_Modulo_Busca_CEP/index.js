const buscaCep = require('./buscaCep')

const cep = '88058455'

buscaCep(cep)
    .then(endereco => {
        console.log(endereco)
    })
    .catch(error => {
        console.error(error.message)
    })
