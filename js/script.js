'use strict';
let fruits = {
  type: 'banana',
  color: 'yellow',
}

  function example (a, ...b){
  console.log(this, a, b);
}

const exampleWithContext = example.bind(fruits, 10, 30, 50, 79);
console.log(exampleWithContext);
console.log(exampleWithContext());
