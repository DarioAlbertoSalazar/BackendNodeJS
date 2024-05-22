let counter = 0;
const colors = ["red", "green", "blue"];
const person = { name: "John", age: 30 };

//hoisting

function incrementCounter() {
  counter++;
}

const changeColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  person.favoriteColor = colors[randomIndex];
};

console.log("Starting debugging example ... ");

for (let i = 0; i < 5; i++) {
  incrementCounter();
  changeColor();
  console.log("Iteracion ", i + 1);
  console.log("Counter ", counter);
  console.log("Person ", person);
}

console.log("Debugging example finished.");
