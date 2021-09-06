// Prototype constructor function

// function Hero(name, level, weapon){
//   this.name = name;
//   this.level = level;
//   this.weapon = weapon;
// }

// Hero.prototype.hello = function(){
//   return `${this.name} raises his ${this.weapon} and greets you!`
// }

// Class constructor funtion

// class Hero {
//   constructor(name, level, weapon){
//     this.name = name;
//     this.level = level;
//     this.weapon = weapon;
//   }
//   hello(){
//     return `${this.name} raises his ${this.weapon} and greets you!`
//   }
// }

// Using extends

class Character {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

class Hero extends Character {
  constructor(name, level, weapon) {
    super(name, level);
    this.weapon = weapon;
  }
  hello() {
    return `${this.name} raises his ${this.weapon} and greets you!`;
  }
}

class Enemy extends Character {
  constructor(name, level, emoji, attackName) {
    super(name, level);
    this.emoji = emoji;
    this.attackName = attackName;
  }
  attack() {
    return `${this.name} ${this.attackName} you!`;
  }
}

const merlin = new Hero("Merlin", 200, "staff");
console.log(merlin);
console.log(merlin.hello());

const spider = new Enemy("spider", 1, "🕷", "bite");
console.log(spider.attack());
