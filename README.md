# Curso de Web Moderno

Este repositório é destinado para os exercicios e exemplos do curso de Web Moderno.

## package.json
Para criar um arquivo basta utilizar o seguinte comando:
~~~
npm init
~~~

Responder as perguntas solicitadas, como nome, versão, etc.

Outra forma é com o comando:
~~~
npm init -y
~~~

Desta forma o package irá ter o nome da primeira pasta acima e responderá sim para todas as perguntas.

### Criação de Scripts
É possivel criarmos scripts para executarmos partindo de um comando, neste exemplo estou iniciando o nodemon com o comando `npm start`

~~~json
{
  "name": "ajax",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "1.18.2",
    "express": "4.16.3",
    "multer": "1.3.0"
  },
  "devDependencies": {
    "nodemon": "1.17.3"
  }
}
~~~

Também é possivel ja definir as dependencias que iremos utilizar, caso já saiba quais serão. Neste caso iremos utilizar as dependencias abaixo:
~~~json
"dependencies": {
    "body-parser": "1.18.2",
    "express": "4.16.3",
    "multer": "1.3.0"
  },
"devDependencies": {
    "nodemon": "1.17.3"
  }
~~~

Após a definição das dependencias, basta rodar o comando `npm i` no terminal que o node irá instalar tudo. Caso precise utilizar alguma outra dependencia ao decorrer do projeto, basta instala-la com o `npm i nomeDaDependencia@versao`. 

---

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

---

## Express
É um servidor web para criação dos web services.
Na pasta Projeto tem alguns exemplo de requisições e respostas.
Para efetuar os testes na API utilizamos o Postman.

Para exectuar um seidor local precisamos de arquivo `server.js` estruturado da seguinte forma:

~~~javascript
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// Middlewares que iremos utilizar
app.use(express.static('.')) //definindo que o express irá cobrir o acesso de todos as pastas e conteúdos no mesmo nivel de pastas 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8080, () => console.log('Executando...'))
~~~

Exemplos na aulas de AJAX.

---

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

### Web Service
* Simple Object Access Protocol ou SOAP - mais antigo e mais dificil de trabalhar, utiliza um conceito de RPC em um formato XML.
* Representational state transfer mais conhecido como REST é a forma que adotamos para efetuar as requisições através dos metodos
HTTP para efetuar as reuisições. 

---

## AJAX
### Asynchronous JavaScript And XML 
* É uma técnica usada com JavaScript
* Atualiza a página (ou parte dela) sem recarregar (reload)
* Comunica de forma assíncrona com um Servidor Web, ou seja, envia e recebe dados em background
* Usa muito... Callback, Promise, Async/Await

---

## Gulp
### https://gulpjs.com/ 

* Ferramenta de automatização de alguns processos da aplicação.
* Pode ser utilizado para transformar o código de desenvolvimento para o código de produção.
* É composto por várias tarefas que podem ser executadas em serie ou paralelo.

### Pipe
Os pipes são como promises que iremos chamando de acordo com a necessidade. O pipe seguinte pega sempre 
o resultado do pipe anterior. Aplica-se transformações até que consigamos chegar ao arquivo esperado.

~~~javascript
function copiar(callback) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(imagePelaMetade())
        .pipe(imageEmPretoEBranco())
        .pipe(transformacaoA())
        .pipe(transformacaoB())
        .pipe(transformacaoC())
~~~

### Babel
#### https://babeljs.io/

* Auxilia a utilização de recursos atuais do JS e coloca de forma mais suportada para os browsers.
* Em resumo ele passa o código para a versão mais antiga suportada de todos os browsers.