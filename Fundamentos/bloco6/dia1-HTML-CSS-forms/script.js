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
  let trimmed = input.value.trim();
  let validation = inputs[name]
}

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
