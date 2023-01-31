const imprimirResult = function (nota) {
    switch (Math.floor(nota)) {
        case 10://desta forma caso seja a opção 10, ele irá executar a ação do 9
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7://desta forma caso seja a opção 8, ele irá executar a ação do 7
            console.log('Aprovado')
            break
        case 6: case 5: //desta forma caso seja a opção 6, ele irá executar a ação do 5
            console.log('Recuperação')
            break
        case 4: case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
            break
    }
}

imprimirResult(10)
imprimirResult(7)
imprimirResult(6)
imprimirResult(2)
imprimirResult(11)
