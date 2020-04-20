const Runner = require('./Runner.js')
const RiskyRunner = require('./RiskyRunner.js');
const distance = 1000;

const finish = function(failure, finish) {
  if (failure) {
    console.log(failure);
  } else {
    finish = finish || `${this} finished`;
    console.log(finish);
  }
}

const anchor = new Runner('Aloysius', distance, finish.bind('Aloysius'));
const thirdLeg = new Runner('Ciel', distance, anchor.run.bind(anchor));
const secondLeg = new Runner('Swan', distance, thirdLeg.run.bind(thirdLeg));
const firstLeg = new Runner('Rob', distance, secondLeg.run.bind(secondLeg));


console.log('On your mark! GetSet! Go!')
firstLeg.run();

const riskyRob = new RiskyRunner('Rob', distance, finish.bind('Rob'))
riskyRob.run();