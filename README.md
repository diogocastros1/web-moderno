# Curso de Web Moderno

Este repositório é destinado para os exercicios e exemplos do curso de Web Moderno.

## Middleware
O middleware é uma cadeia de responsabilidade, com isto não há amarração direta dentro de cada 
função, desta forma temos um aproveitamento melhor da função criada pois temos uma função *"next()"*
que podemos declarar ou não de acordo com a necessidade. Conforme código abaixo:

~~~javascript
// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)

console.log(ctx)
~~~

## Express
É um servidor web para criação dos web services.
Na pasta Projeto tem alguns exemplo de requisições e respostas.
Para efetuar os testes na "API" utilizamos o Postman.

