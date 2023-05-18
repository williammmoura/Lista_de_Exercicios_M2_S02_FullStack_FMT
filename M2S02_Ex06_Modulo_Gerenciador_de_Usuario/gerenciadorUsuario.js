const fs = require('fs');
const { stringify } = require('querystring');

// LER arquivo de usuários
const lerAquivoUsuarios = () => {
    try{
        const usuarios = fs.readFileSync('usuarios.json')
        return JSON.parse(usuarios)
    }catch(error){
        return[];
    }
}

// ESCREVE no arquivo de usuários
const escreveArquivoUsuarios = (usuarios) => {
    fs.writeFileSync('usuarios.json', JSON, stringify(usuarios, null, 2))
}

// Cadastrar um novo usuário
const cadastrarNovoUsuario = (usuario) => {
    const usuarios = lerAquivoUsuarios()
    const usuarioExiste = usuarios.find((u) => u.email === usuario.email)

    if(usuarioExiste){
        return 'Erro: O email está sendo utilizado.'
    }
    usuarios.push(usuario)
    escreveArquivoUsuarios(usuario)

    return 'Usuario cadastrado com sucesso!'
}

//Login
const login = (email, senha) => {
    const usuarios = lerAquivoUsuarios()
    const usuario = usuarios.find((u) => u.email === email)

    if(!usuario || usuario.senha !== senha){
        return 'Erro: Email e senha incorretos.'
    }

    return 'Login realizado com sucesso!'
}

// Excluir usuários
const excluirUsuario = (email, senha) => {
    const usuarios = lerAquivoUsuarios()
    const indiceUsuario = usuarios.findIndex((u) => u.email === email)

    if(indiceUsuario === -1 || usuarios[indiceUsuario].senha !== senha){
        return 'Erro: Email e senha incorretos.'
    }

    usuarios.splice(indiceUsuario, 1)
    escreveArquivoUsuarios(usuarios)

    return 'Usuário excluído.'
}

module.exports = {cadastrarNovoUsuario, login, excluirUsuario}