class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(`Name:${this.name}`);
  }

  showStats() {
    console.log(
      `Ninja's name: ${this.name}, strength:${this.strength}, speed${this.speed}, and health${this.health}.`
    );
  }

  drinkSake() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
