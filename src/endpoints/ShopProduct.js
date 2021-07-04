function get() {
  return Promise.resolve(
    [
      {
        _id: 1,
        name: 'Leite Moça',
        price: 2.99,
        image: require('../assets/images/leitemoca.png')
      },
      {
        _id: 2,
        name: 'Leite Cooper',
        price: 1.59,
        image: require('../assets/images/leite.png')
      },
      {
        _id: 3,
        name: 'Necau',
        price: 3.99,
        image: require('../assets/images/nescau.png')
      },
      {
        _id: 4,
        name: 'Omo em pó',
        price: 4,
        image: require('../assets/images/omo.png')
      },
    ]
  );
}

export default {
  get
};