function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Note', 2000.49))
console.log(criarProduto('Smartphone', 1999.99))