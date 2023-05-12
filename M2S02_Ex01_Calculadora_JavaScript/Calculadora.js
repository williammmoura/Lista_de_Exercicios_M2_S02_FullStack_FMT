//Calculadora
const somar = (a, b) => {
    return a + b;
};

const subtracao = (a, b) => {
    return a - b;
}

const multiplicacao = (a, b) => {
    return a * b;
}

const divisao = (a, b) => {
    return a / b;
}

module.exports = {
    somar: somar,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao
};