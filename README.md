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
Para efetuar os testes na API utilizamos o Postman.

## HTTP
É o protocolo de comunicação da internet, suas principais caracteristicas são:

* **Camada de aplicação;**
* **Stateless** - trata toda requisição como se fosse a primeira;
* **TCP/IP**
* **Cliente-Servidor** - conceito de req/res;

Uma das técnicas utilizadas para otimizar o site é juntar varios arquivos javascript em um só arquivo,
desde que este não fique muito grande. Mesma coisa com CSS.
### Definição de alguns parametros:
* **GET** = passamos direto na URL;
* **POST** = passamos os parametros no corpo da requisição;
### Grupo de status HTTP:
* **1xx - Informação**
* **2xx - Sucesso**
* **3xx - Redirecionamento**
* **4xx - Erro no cliente**
* **5xx - Erro no servidor**
### Cliente Side vs Servidor Side

Atualmente todas as aplicações utilizam a estrutura client side e conjunto com server side, ou seja
utilizamos o front para tratativas mais simples e o servidor para obter dados.

### Conteúdo Estático vs Dinâmico
* **Estático** - quando o servidor le um arquivo do disco para renderizar a página. Para gerar está pagina 
a renderização é mais rápida;
* **Dinâmico** - contúdo gerado a partir de um código que pode trazer informações personalizadas;

### HTTPSeguro
* **HTTP + TLS** - Transfer Layer Security Protocol (SSL v4)
* **HTTP + SSL** - Security Sockers Layer Protocol

#### Certificado <> Protocolo
Costumamos encontrar a descrição *Certificado SSL/TLS*, mas o correto é *Certificados usados com SSL/TLS*.

Um certificado pode ser válido para um navegador mas para outro pode ser inválidado se for um navegador mais antigo que não tenha
este certificado instalado.

CA - Certificadora Autorizada.

Uma certificadora gratuita é  o *lets encrypt*.
#### Beneficios
* Dados criptografados: URL, cookies e headers
* Protege contra interceptação (MITM)
* Usa certificados digitais
