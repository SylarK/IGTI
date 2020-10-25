class Animal{
  constructor(name){
    this.name = name;
  }

  speak(){
    console.log(`The ${this.name} is speaking...`)
  }

}

class Dog extends Animal{
  constructor(name, type){
    super(name);
    this.type = type;
  }

  speak(){
    console.log(`The ${this.name} (${this.type}) is barking...`)
  }
}

class Cat extends Animal{
  constructor(name, type){
    super(name);
    this.type = type;
  }

  speak(){
    console.log(`The ${this.name} (${this.type}) is meowing...`)
  }
}

const animal1 = new Animal('Fred');
animal1.speak();

const animal2 = new Dog('Rex', 'Bulldog');
animal2.speak();

const animal3 = new Cat('Katie', 'Han Solo');
animal3.speak();