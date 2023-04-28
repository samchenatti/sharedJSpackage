# Distribuindo pacotes para Back/Front

Exemplo simples de distribuição de pacotes que podem tanto ser importados pelo Node.js quanto pelo browser do cliente.

Este exemplo utiliza Webpack, e tem como base o [tutorial da própria biblioteca](https://webpack.js.org/guides/author-libraries/).

Um outro tutorial pode ser encontrado [neste link](https://itnext.io/how-to-build-and-publish-npm-packages-with-webpack-dea19bb14627).

## Como publicar o pacote para uso por front-end

Gere o bundle com o Webpack:

```sh
npm install

npx webpack
```

Desta maneira você terá sua biblioteca minificada na pasta *dist*.

Além disso o *Webpack* se encarrega de torna-la importável tanto pelo browser do cliente quanto por um servidor Node.js.

Agora basta disponibilizar a *dist* para ser usado em seu HTML.

## Como publicar o pacote para uso por backend

Existem [várias formas](https://medium.com/engenharia-noalvo/ways-to-have-your-private-npm-registry-and-a-final-diy-solution-eed001a88e74) de disponibilizar pacotes de maneira que possam ser instaladas pelo NPM, porém algumas requerem a criação de um servidor rodando uma aplicação para tal fim.

A seguir mencionamos algumas.

### Usando Git

A forma mais fácil de disponibilizar o pacote **para backend** é usando o próprio Git.
Para isto basta que a aplicação que for usar o pacote referencie o repositório no *package.json*

```json
{
  ...

  "dependencies": {
    "greetings": "git+https://github.com/samchenatti/sharedJSpackage.git"
  }
}
```

E seguir com o *npm install* como de costume.

**Problema:** se a sua Function não for buildada localmente é possível que o ambiente não tenha acesso ao seu repositório privado.

### Usando o Artifactory Registry do GCP

Uma outra opção é usar um Artifactory Registry privado, que funcionaria como um NPM ao qual apenas seu time teria acesso.
A GCP provê um serviço desse tipo.