// ex-01 -----------------------------------------------------------------

// function verifyPalindrome(arg) {
//   let reverse = arg.split('').reverse().join('')

//   if (reverse == arg) {
//     return true
//   } else {
//     return false
//   }

// }

// console.log(verifyPalindrome('ovo'))

// ex-02 -------------------------------------------------------------------

// let numbers = [2, 4, 6, 7, 10, 0, -3]

// function checkMaxIndex(arg) {
//   let maxIndex = 0

//   for (let key in arg) {
//     if(arg[Index] < arg[key]) {
//       maxIndex = key
//     }
//   }

//   return maxIndex
// }
// console.log(checkMaxNumber(numbers))

// ex-03 -------------------------------------------------------------------

// let numbers = [2, 4, 6, 7, 10, 0, -3]

// function indiceMenor(numbers) {
//   let minimum = 0
//   for (let i in numbers) {
//     if (numbers[minimum] > numbers[i]) {
//       minimum = i
//     }
//   }
//   return minimum
// }

// console.log(indiceMenor(numbers))

// ex-04 -------------------------------------------------------------------

// function biggestName(array) {
//   let checkCaracter = array[0]

//   for (let i in array) {
//     if (checkCaracter.length < array[i].length) {
//       checkCaracter = array[i]
//     }
//   }

//   return checkCaracter;
// }

// console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// ex-05 -------------------------------------------------------------------

function repeat(num) {
  let result = 0;

  for (let i in num) {
    if (num[i] == num[i]) {
      result ++
    }
  }
  return result;
}

console.log(repeat([2, 3, 2, 5, 8, 2, 3]));