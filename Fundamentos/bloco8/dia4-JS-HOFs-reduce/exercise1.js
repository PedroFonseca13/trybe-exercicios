const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  return arrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
}

console.log(flatten());
