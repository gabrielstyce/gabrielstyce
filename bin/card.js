#!/usr/bin/env node
// Usado para dizer ao Node.js que se trata de uma ferramenta do CLI

// Declarando os módulos:
const chalk = require('chalk');
const boxen = require('boxen');

// Definindo as opções para o ‘boxen’:
const options = {
  padding: 7,
  margin: 7,
  borderStyle: 'double',
  float: 'center',
  borderColor: '#ff4879',
  backgroundColor: 'black',
};

// Inclusão do texto e mais as definições do ‘chalk’ e cores:
const data = {
  name: chalk.white('             Gabriel Araujo /'),
  handle: chalk.white('gabrielstyce'),
  twitter: chalk.white('https://twitter.com/gStyce'),
  github: chalk.white('https://github.com/gabrielstyce'),
  linkedin: chalk.white('https://www.linkedin.com/in/gabriel-styce'),
  youtube: chalk.white('https://www.youtube.com/user/Gabriel18710'),
  twitch: chalk.white('https://www.twitch.tv/ar1sega'),
  instagram: chalk.white('https://www.instagram.com/gabrielstyce'),
  web: chalk.white('https://gabrielstyce.com'),
  npx: chalk.white('npx gabrielstyce'),

  labelTwitter: chalk.rgb(51, 51, 255).bold('   Twitter:'),
  labelGitHub: chalk.rgb(253, 245, 5).bold('    GitHub:'),
  labelLinkedIn: chalk.rgb(0, 255, 255).bold('  LinkedIn:'),
  labelYoutube: chalk.rgb(255, 25, 25).bold('   Youtube:'),
  labelTwitch: chalk.rgb(153, 102, 204).bold(' Twitch.tv:'),
  labelInstagram: chalk.rgb(191, 255, 179).bold(' Instagram:'),
  labelWeb: chalk.rgb(255, 136, 77).bold('       Web:'),
  labelCard: chalk.rgb(240, 13, 240).bold('      Card:'),
};

// Aqui será a saída do nosso Cartão Pessoal em NPX:
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const youtubening = `${data.labelYoutube}  ${data.youtube}`;
const twitching = `${data.labelTwitch}  ${data.twitch}`;
const instagraming = `${data.labelInstagram}  ${data.instagram}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Aqui devemos colocar toda a nossa saída numa única variável para que possamos usar
// o ‘boxen de maneira efetiva:
const output =
  heading +
  newline +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  youtubening +
  newline +
  twitching +
  newline +
  instagraming +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
