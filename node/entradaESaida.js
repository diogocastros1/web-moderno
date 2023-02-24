const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        //o replace esta substituindo o enter após o final da entrada de dados
        const nome = data.toString().replace('\r\n','') //para unix é somente \n

        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}