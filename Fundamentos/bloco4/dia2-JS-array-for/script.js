let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 420];
let sum = 0;
let median = 0;
let maxNumber = 0;
let even = 0;

// 01 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

console.log("----------------------------------------------------------")

// 02 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

console.log(`Soma total dos valores contidos no array é ${sum}`);

console.log("----------------------------------------------------------")

// 03 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
  median = sum / numbers.length
}

console.log(`Média aritmética dos valores contidos no array é ${median.toFixed(2)}`);

console.log("----------------------------------------------------------")

// 04 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
  median = sum / numbers.length
  
}

if (median > 20) {
  console.log(`Valor maior que 20`);
} else {
  console.log(`Valor menor que 20`)
}

console.log("----------------------------------------------------------")

// 05 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log(`O maior valor contindo no array é ${maxNumber}`);

console.log("----------------------------------------------------------")

// 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

for (let i = 0; i < numbers.length; i++) {
  if ((numbers[i] % 2) != 0) {
    even ++
  }
}

console.log(even);