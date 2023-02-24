# Node
## Package JSON
### Atualização de pacotes

O ^ permite que as versões *minor* instaladas sejam atualizadas, conforme exemplo abaixo:

~~~JSON
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.3.0" 
  }
~~~
No exemplo acima o axios pode assumir qualquer versão 1.X.X, mas não uma versão 2.X.X.

Já ao utilizarmos o ~ estamos dizendo que somente o último digito da versão *fix* pode ser atualizado.

~~~JSON
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "axios": "~1.3.0" 
  }
~~~

E não colocando nada, ele so irá instalar a versão exata do package.json.

### Dependencia de Desenvolvimento

Para criar uma dependencia de desenvolvimento basta utilizar o seguinte comando:

~~~ 
npm install --save-dev axios@1.3.0 -E
~~~

E ao executar teriamos o seguinte:
~~~JSON
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "axios": "1.3.0"
  }
~~~

### package-lock.json
Este arquivo vai garantir qual foi a versão que o projeto foi buildado, desta forma 
mesmo que no package.json os modulos instalados estejam com o ^ ou ~ eles não irão 
ser instalados em versões diferentes das que estão no package-lock.json.

### scripts
Os scripts que ficam dentro do package.json são muito úteis para automatização de processos.
No exemplo abaixo estamos utilizando-o somente para startar o nodemon, mas podemos encadear varios 
comandos para execução em determinados momentos, utilizando o *"&&"* como vemos no *"test"*.
~~~JSON
"scripts": {
    "start": "nodemon",
    "dev": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
~~~
Para executar estes scripts com nomes padrão, como *"start"* basta digitar 
~~~ 
npm start 
~~~
Ou no caso de scripts que não são padrão, como *"dev"* digitar:
~~~
npm run dev
~~~

No link abaixo temos os alguns scripts e a documentação do npm.
><https://docs.npmjs.com/cli/v9/using-npm/scripts>
