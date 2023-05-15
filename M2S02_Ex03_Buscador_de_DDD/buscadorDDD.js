const buscadorDeDDD = (ddd) => {
    let estado
    switch (ddd) {
        case 51:
        case 53:
        case 55:
        case 54:
            estado = "Rio Grande do Sul"            
            break;
        case 48:
        case 47:
        case 49:
            estado = "Santa Catarina"
            break;
        default:
            estado = "Não foi possível encontrar o DDD"
            break;
    }
    return estado;
}

module.exports = buscadorDeDDD;