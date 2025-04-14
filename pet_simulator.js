class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.age = parseFloat(Math.floor(Math.random() * 10).toFixed(1));
    this.energy = 50;
    this.hunger = 50;
  }

  getInfo() {
    return `이름: ${this.name}, 종류: ${this.species}, 나이: ${this.age.toFixed(
      1
    )}살, 에너지: ${this.energy}, 배고픔: ${this.hunger}`;
  }

  eat() {
    this.energy = Math.max(0, this.energy - 30);
    this.hunger = Math.min(100, this.hunger + 10);
  }

  play() {
    this.energy = Math.max(0, this.energy - 20);
    this.hunger = Math.min(100, this.hunger + 20);
    this.age = parseFloat((this.age + 0.1).toFixed(1));
  }

  sleep() {
    this.energy = Math.max(0, this.energy + 40);
    this.hunger = Math.min(100, this.hunger + 10);
  }

  speak() {
    console.log(`${this.name}: "울음소리"`);
  }
}

class Dog extends Pet {
  constructor(name) {
    super(name, "Dog");
  }

  speak() {
    console.log(`[Dog] ${this.name}: "멍멍!"`);
  }
}

class Cat extends Pet {
  constructor(name) {
    super(name, "Cat");
  }

  speak() {
    console.log(`[Cat] ${this.name}: "야옹~"`);
  }
}

class Hamster extends Pet {
  constructor(name) {
    super(name, "Hamster");
  }

  speak() {
    console.log(`[Hamster] ${this.name}: "찍!"`);
  }
}

class PetManager {
  constructor() {
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  simulateDay(day) {
    console.log(`\n--------Day${day}---------`);
    const actions = ["eat", "play", "sleep"];

    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      pet.speak();

      const action = actions[Math.floor(Math.random() * actions.length)];
      switch (action) {
        case "eat":
          pet.eat();
          break;
        case "play":
          pet.play();
          break;
        case "sleep":
          pet.sleep();
          break;
      }

      console.log(`${pet.name}은(는) ${action}을 했습니다.`);
      console.log(pet.getInfo());
    }
    console.log("-----------------------");
  }

  showAllPets() {
    console.log("\n🐶 전체 펫😼 목록🐹");
    for (let i = 0; i < this.pets.length; i++) {
      const pet = this.pets[i];
      console.log(pet.getInfo());
    }
  }
}

const names = [
  "뽀삐",
  "호두",
  "콩이",
  "뽀야",
  "토리",
  "나비",
  "냥이",
  "네로",
  "별이",
  "코코",
  "키키",
  "햄토리",
  "망고",
  "쿼카",
  "염소",
];
const classes = [Dog, Cat, Hamster];
const manager = new PetManager();

const petCount = Math.floor(Math.random() * 3) + 3;

for (let j = 0; j < petCount; j++) {
  const name = names[Math.floor(Math.random() * names.length)];
  const petclass = classes[Math.floor(Math.random() * classes.length)];
  const pet = new petclass(name);
  manager.addPet(pet);
}

manager.showAllPets();

const dayCount = Math.floor(Math.random() * 3) + 3;

for (let day = 1; day <= dayCount; day++) {
  manager.simulateDay(day);
}
