const gerenciadorUsuarios = require('./gerenciadorUsuario')

// Novo Usuário
const novoUsuario = {
    nome: 'William',
    email: 'william@will.com',
    senha: '123456',
}

console.log(gerenciadorUsuarios.cadastrarNovoUsuario(novoUsuario))

//Login
const email = 'william@will.com'
const senha = '123456'

console.log(gerenciadorUsuarios.login(email, senha))

//Excluir Usuário
console.log(gerenciadorUsuarios.excluirUsuario(email, senha))