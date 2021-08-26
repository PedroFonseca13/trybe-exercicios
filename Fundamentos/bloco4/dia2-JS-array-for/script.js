let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let median = 0;

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

console.log("----------------------------------------------------------")

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

console.log(`Soma total dos valores contidos no array é ${sum}`);

console.log("----------------------------------------------------------")

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
  median = sum / numbers.length
}

console.log(`Média aritmética dos valores contidos no array é ${median}`);

console.log("----------------------------------------------------------")