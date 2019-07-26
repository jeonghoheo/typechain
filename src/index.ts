interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Jeongho",
  age: 123,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are a ${person.age}, you are a ${
    person.gender
  }`;
};

console.log(sayHi(person));

export = {};
