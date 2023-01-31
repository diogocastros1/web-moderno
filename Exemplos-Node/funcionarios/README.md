# Package JSON
## Atualização de pacotes

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
<b>
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

## Dependencia de Desenvolvimento

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