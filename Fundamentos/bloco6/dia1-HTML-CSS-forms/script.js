function generateStates() {
  let select = document.querySelector('select#state')
  let states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]

  for (let i = 0; i < states.length; i++) {
    let createOptions = document.createElement('option')
    select.appendChild(createOptions).innerHTML = states[i]
    select.appendChild(createOptions).value = states[i]
  }
}

let inputs = {
  name: {
    maxLength: 40,
    required: true,
  },
  email: {
    maxLength: 50,
    required: true,
  },
  cpf: {
    maxLength: 11,
    required: true,
  },
  address: {
    maxLength: 200,
    required: true,
  },
  city: {
    maxLength: 28,
    required: true,
  },
  state: {
    type: 'select',
    required: true,
  },
  houseType: {
    type: 'radio',
    required: true,
  },
  resume: {
    maxLength: 1000,
    required: true,
  },
  role: {
    maxLength: 40,
    required: true,
  },
  roleDescription: {
    maxLength: 500,
    required: true,
  },
  startDate: {
    type: 'date',
    required: true,
  },
}

function defaultValidation(input, name) {
  let trimmed = input.value.trim()
  let validation = inputs[name]

  if (validation.required && trimmed.length === 0) {
    return false
  }

  if (validation.maxLength && trimmed.length > validation.maxLength) {
    return false
  }

  return true
}

function dateValidation(input, name) {
  if (input.value.length === 0) {
    return {
      message: 'A data não foi preenchida!',
    }
  }

  let regex = /^\d\d\/\d\d\/\d\d\d\d$/

  if (!regex.test(input.value)) {
    return {
      message: 'Data: Formato inválido',
    }
  }

  let splitted = input.value.split('/')
  let day = splitted[0]
  let month = splitted[1]
  let year = splitted[2]

  if (day < 0 || day > 30) {
    return {
      message: 'Dia inválido',
    }
  }

  if (month < 0 || month > 12) {
    return {
      message: 'Mês inválido',
    }
  }

  if (year < 0) {
    return {
      message: 'Ano inválido',
    }
  }

  return true
}

let splitted = input.value.split('/')
let day = splitted[0]
let month = splitted[1]
let year = splitted[2]

if (day < 0 || day > 30) {
  return {
    message: 'Dia inválido',
  }
}

if (month < 0 || month > 12) {
  return {
    message: 'Mês inválido',
  }
}

if (year < 0) {
  return {
    message: 'Ano inválido',
  }
}

return true

function handleSubmit(event) {
  event.preventDefault()

  //validar os dados
  let name = document.querySelector('[name=name]')

  //verifciar maxLength e Required
  if (name.value.length > 40 || name.value.length === 0) {
    alert('')
  }
}

window.onload = () => {
  generateStates()

  let buttonSubmit = document.querySelector('button.submit-button')
  buttonSubmit.addEventListener('click', handleSubmit)
}
