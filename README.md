# Cartão Pessoal em NPX - Gabriel Araujo :floppy_disk:

Desenvolvimento de um package que simula um cartão pessoal. O exemplo desenvolvido aqui foi baseado 
no repositório do **[Tierney Cyren](https://twitter.com/bitandbang)**

No caso aqui, estou usando os meus dados para criar o meu Cartão Pessoal. O pacote, que nesse caso é o meu cartão pessoal, encontra-se disponível no site do **npmjs** pelo link: 

- Cartão Pessoal Gabriel Araujo: **[gabrielstyce](https://www.npmjs.com/package/gabrielstyce)**

Para instalar o package do meu cartão pessoal, bastam executar o seguinte comando abaixo:

```
> npm i gabrielstyce

```

## Recursos Utilizados: :fire:

- **[Visual Studio Code](http://bit.ly/2KoflJH)**
- Javascript
- **[Node.Js](https://nodejs.org/en/)**
- **[Npm](https://www.npmjs.com/)**
- Uso dos pacotes:
    - **[boxen](https://www.npmjs.com/package/boxen)**
    - **[chalk](https://www.npmjs.com/package/chalk)**
    - **[standard](https://www.npmjs.com/package/standard)**
    - **[commander](https://www.npmjs.com/package/commander)**

## Blz.. legal! Quero fazer o meu.. Como faço?! :rocket:

Bastam seguir os passos abaixo:

1. Crie uma pasta do projeto de acordo com o seu nome do GitHub e siga os passos abaixo:

```
> mkdir gabrielstyce && cd gabrielstyce

> npm init 

> mkdir bin

> touch card.js
```

2. Após criar a estrutura do projeto, execute os seguintes comandos para incluir os seguintes pacotes no arquivo **package.json**:

```
> npm install standard --save-dev
```

```
> npm install chalk --save
```

```
> npm install boxen --save
```

```
> npm install commander --save
```

3. Feito isso, agora copie o código abaixo e coloque no arquivo **card.js**: (inclua os seus dados!!)

```js
#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk')
const boxen = require('boxen')

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Inclusão do Text e mais as definições do ‘chalk’:
const data = {
  name: chalk.white(' seu nome /'),
  handle: chalk.cyan('seu nick'),
  work: chalk.white('trabalho'),
  twitter: chalk.cyan('https://twitter.com/username'),
  github: chalk.cyan('https://github.com/username'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/username'),
  medium: chalk.cyan('https://medium.com/@username'),
  web: chalk.cyan('https://seu site'),
  npx: chalk.white('npx nome do projeto'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelMedium: chalk.white.bold('    Medium:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const mediuming = `${data.labelMedium}  ${data.medium}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar 
// o ‘boxen de maneira efetiva: 
const output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + mediuming + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
```

4. Execute o comando abaixo para que possamos verificar a versão que possuem do **npm**:

```
> npm version major
```

5. Após verificar qual a versão do **npm** que possuem, execute o comando abaixo:

```
> npm adduser
```

6. Enfim, vamos publicar o nosso pacote para o site do npmjs. Para isso, basta executar o seguinte comando abaixo:

```
> npm publish
```

7. E finalmente... execute o comando abaixo para visualizar o seu cartão pessoal criado:

```
> npx gabrielstyce 
```

E pronto! Aparecerá o seu Cartão Pessoal!! :heart_eyes: