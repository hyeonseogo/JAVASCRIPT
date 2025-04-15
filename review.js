function Dog(name, age, color) {
  this.color = color;
  this.name = name;
  this.age = age;
}

const Rucy = new Dog("루시", 15, "흰색");
console.log(Rucy);

console.log(`이름: ${Rucy.name}`);
console.log(`색상: ${Rucy.color}`);
console.log(`나이: ${Rucy.age}`);

const PPomi = new Dog("뽀미", 7, "흰색");
console.log(PPomi);

console.log(`이름: ${PPomi.name}`);
console.log(`색상: ${PPomi.color}`);
console.log(`나이: ${PPomi.age}`);

Rucy.family = "포메";
Rucy.getFamily = function () {
  return this.family;
};
console.log(`종: ${Rucy.family}`);
console.log(`getFamily: ${Rucy.getFamily()}`);

console.log("---------------------------");

Dog.prototype.owner = "김사과";
Dog.prototype.run = function () {
  return this.name + "달린다!";
};

console.log(`Rucy 소유자: ${Rucy.owner}`);
console.log(`PPomi 소유자: ${PPomi.owner}`);

console.log(`Rucy run: ${Rucy.run()}`);
console.log(`PPomi run: ${PPomi.run()}`);
