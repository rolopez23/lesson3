const Runner = require('./Runner.js')
const distance = 1000;

const team = ['Nate', 'Ciel', 'Swan', 'Rob'];

const finish = function(failure, finish) {
  if (failure) {
    console.log(failure);
  } else {
    finish = finish || `${this} finished`;
    console.log(finish);
  }
}

const anchor = new Runner(team[0], distance, finish.bind(team[0]));
const thirdLeg = new Runner(team[1], distance, anchor.run.bind(anchor));
const secondLeg = new Runner(team[2], distance, thirdLeg.run.bind(thirdLeg));
const firstLeg = new Runner(team[3], distance, secondLeg.run.bind(secondLeg));


console.log('On your mark! GetSet! Go!')
firstLeg.run();

