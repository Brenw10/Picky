function get() {
  return Promise.resolve(
    [
      {
        _id: 1,
        name: 'Leite Moça',
        price: 2.99,
        image: require('../assets/images/leitemoca.png'),
        shop: {
          _id: 1,
          name: 'Comercial Esperança',
          district: 'Centro',
          street: 'Av. Dr. Nelson d Ávila',
          number: 29,
          city: 'São José dos Campos',
        },
      },
      {
        _id: 2,
        name: 'Leite Cooper',
        price: 1.59,
        image: require('../assets/images/leite.png'),
        shop: {
          _id: 1,
          name: 'Comercial Esperança',
          district: 'Centro',
          street: 'Av. Dr. Nelson d Ávila',
          number: 29,
          city: 'São José dos Campos',
        },
      },
      {
        _id: 3,
        name: 'Necau',
        price: 3.99,
        image: require('../assets/images/nescau.png'),
        shop: {
          _id: 1,
          name: 'Comercial Esperança',
          district: 'Centro',
          street: 'Av. Dr. Nelson d Ávila',
          number: 29,
          city: 'São José dos Campos',
        },
      },
      {
        _id: 4,
        name: 'Omo em pó',
        price: 4,
        image: require('../assets/images/omo.png'),
        shop: {
          _id: 1,
          name: 'Comercial Esperança',
          district: 'Centro',
          street: 'Av. Dr. Nelson d Ávila',
          number: 29,
          city: 'São José dos Campos',
        },
      },
    ]
  );
}

export default {
  get
};