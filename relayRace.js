const RelayRunner = require('./relayRunner.js')
const distance = 1000;

const finish = function(name) {
  console.log(`${this} finished`)
}

const anchor = new RelayRunner('Aloysius', distance, finish.bind('Aloysius'));
const thirdLeg = new RelayRunner('Ciel', distance, anchor.run.bind(anchor));
const secondLeg = new RelayRunner('Swan', distance, thirdLeg.run.bind(thirdLeg));
const firstLeg = new RelayRunner('Rob', distance, secondLeg.run.bind(secondLeg));


console.log('On your mark! GetSet! Go!')
firstLeg.run();
