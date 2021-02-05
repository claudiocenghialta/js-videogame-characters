// Article type: Project
// Rogue-like videogame
// Image you have to create a class hierarchy for a rogue-like videogame having a brave hero fighting a bunch of terrible enemies.

// Your team mates have already defined the main classes of your videogame, as the following:

/**
 * The base character class from where the other shall inherit
 */
class Character {
  constructor(name, hp, dmg) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
  }

  get alive() {
    return this.hp > 0;
  }

  attack(victim) {
    victim.receiveDmg(this.dmg);
  }

  receiveDmg(dmg) {
    this.hp -= dmg;
  }
}

/**
 * Our brave Hero class
 */
class Hero extends Character {
  constructor() {
    super("Hero", 100, 10);
  }

  // of course our hero can use a magic potion
  useMagicPotion() {
    this.hp += 15;
  }
}

/**
 * The base enemy class
 */
class Enemy extends Character {
  get isEnemy() {
    return true;
  }

  growl() {
    console.log("Grrr");
  }
}

// Use this classes to create the following enemy classes:

// Werewolf, it shall have 30 HP and 5 DMG
// Vampire, it shall have 50 HP and 10 DMG
// AntonioZequila, it shall have 80 HP, 20 DMG and should growl a different sound.

// Then create an EnemyFactory class that can be used to create random instances of enemies, like the following:
// const enemy = EnemyFactory.create();

// -----------------SOLUTION HERE ----------------

const werewolf = new Enemy("Werewolf", 30, 5);
const vampire = new Enemy("Vampire", 50, 10);

// Etend Enemy class to create AntonioZequila, an enemy that growls a different sound
class AntonioZequila extends Enemy {
  growl() {
    console.log("AAAaaaaaRRrrRrgGGGG");
  }
}
const antonioZequila = new AntonioZequila("Antonio Zequila", 80, 20);

// create an array of all enemies
const allEnemies = [werewolf, vampire, antonioZequila];
// create class EnemyFactory to create a random enemy
class EnemyFactory {
  constructor(enemies) {
    var random = Math.floor(Math.random() * enemies.length);
    console.log(random, enemies);
    return enemies[random];
  }
}

const enemy = new EnemyFactory(allEnemies);
console.log(enemy);
enemy.growl();
