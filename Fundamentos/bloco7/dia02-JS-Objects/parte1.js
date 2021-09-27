const order = {
  name: 'Rafael Fonseca',
  phoneNumber: '31-97168-0891',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson
  const customerName = order['name']
  const customerPhone = order['phoneNumber']
  const street = order['address'].street
  const number = order['address'].number
  const apartment = order['address'].apartment

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, ${street}, Nº: ${number}, AP: ${apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {
  const customerName = order['name'] = 'Pedro Fonseca'
  const pizzas = Object.keys(order.order.pizza)
  const drink = order.order.drinks.coke.type
  const total = order.payment.total = '50'
  
  console.log(`Olá ${customerName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${total},00 `)
}

orderModifier(order);