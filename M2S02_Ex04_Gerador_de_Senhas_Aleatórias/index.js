//Importação do módulo
const geradorDeSenhas = require('./gerador_senhas')

const tamanhoSenha = 8
const senha = geradorDeSenhas(tamanhoSenha)

console.log(senha)