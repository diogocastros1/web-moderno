//Exemplo de callback no browser
//document aponta para a pagina web
//acessando o primeiro body da pagina, indice 0
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu!!!')
}
