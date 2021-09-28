const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
}

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
}

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
}

const addNewKey = (obj, key, value) => {
  obj[key] = value
}

addNewKey(lesson2, 'turno', 'noite')

const listKeys = obj => Object.keys(obj)
// console.log(listKeys(lesson1))

const sizeObj = obj => Object.keys(obj).length
// console.log(sizeObj(lesson1))

const listObj = obj => Object.values(obj)
// console.log(listObj(lesson1))

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
// console.log((allLessons));

const allStudents = obj => {
  let total = 0;
  const array = Object.keys(obj)
  for (index in array) {
    const currentKey = array[index]
    total += obj[currentKey].numeroEstudantes
  }

  return total;
}
console.log(allStudents(allLessons))