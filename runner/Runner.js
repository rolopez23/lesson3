class Runner {
  constructor(name, distance, callback) {
    this.distance = distance;
    this.name = name;
    this.callback = callback;
    this.speed = .5 + (Math.random() * .5)
  }

  run() {
    console.log(`${this.name} is Running!`);
    setTimeout(this.callback, this.distance / this.speed)
  }

}

module.exports = Runner;
