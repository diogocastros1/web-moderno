const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }

console.log(JSON.stringify(obj))

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) //formato invalido
// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) //formato invalido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // este é um formato valido para fazer um parse de um JSON
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}')) // strings devem ser com aspas duplas "

// https://jsonlint.com/ site para validar json

