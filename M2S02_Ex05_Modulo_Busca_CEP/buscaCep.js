const axios = require('axios')

//função assincrona
async function buscaCep(cep){
    try{
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const data = response.data

        if(data.erro){
            throw new Error("CEP inválido! Tente novamente.")
        }
        const endereco = {
            cep: data.cep,
            logradouro: data.logradouro,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
        }
        return endereco
    }catch(error){
        throw new Error('Ops! Ocorreu um ao erro.')
    }
}

module.exports = buscaCep