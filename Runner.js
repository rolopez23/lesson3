class Runner {
  constructor(name, distance, callback) {
    this.distance = distance;
    this.name = name;
    this.callback = callback;
    this.speed = .5 + (Math.random() * .5)
  }

  run(failure, finish) {
    console.log(`${this.name} is Running!`);
    setTimeout((failure, finish)=>{this.callback(failure, finish)}, this.distance / this.speed)
  }

}

module.exports = Runner;
