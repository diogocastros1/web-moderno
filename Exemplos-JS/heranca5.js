console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Castro'.reverse()) //chamando a funcao criada acima

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

//no exemplo abaixo estamos definindo que toda string sera lascou
String.prototype.toString = function (){
    return 'Lascou'
}

console.log('Escola Castro'.reverse())

