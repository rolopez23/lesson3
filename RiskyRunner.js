const Runner = require('./Runner.js');

class RiskyRunner extends Runner {
  constructor(name, distance, callback) {
    super(name, distance, callback);
    this.reliability = 0.2 * Math.random();
  }

  run() {
    let failure = Math.random();
    if (failure > this.reliability) {
      const failure = `${this.name} is no longer runing`
      super.run(failure, null);
    } else {
      const finish = `${this.name} finished`
      super.run(null, finish);
    }
  }

}

module.exports = RiskyRunner;