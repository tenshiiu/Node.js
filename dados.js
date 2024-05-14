class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return "My name is " + this.name;
  }
}

module.exports = {
  Person,
  pais,
};

class pais {
  constructor(name) {
    this.pais = name;
  }

  DigaMeuPais() {
    return "Eu moro " + this.pais;
  }
}

class Idade {
  constructor(name) {
    this.idade = name;
  }

  DigaMinhaIdade() {
    return "Tenho " + this.idade;
  }
}
