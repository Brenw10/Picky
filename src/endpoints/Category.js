function getAll() {
  return Promise.resolve(
    [
      {
        _id: 1,
        name: 'Bebidas',
        color: '#f7d552',
        image: require('../assets/images/drink.png')
      },
      {
        _id: 2,
        name: 'Doces',
        color: '#ab2d2d',
        image: require('../assets/images/chocolate.png')
      },
      {
        _id: 3,
        name: 'Padaria',
        color: '#e29c42',
        image: require('../assets/images/bread.png')
      },
      {
        _id: 4,
        name: 'Limpeza',
        color: '#95c8ee',
        image: require('../assets/images/soap.png')
      },
      {
        _id: 5,
        name: 'Encaixotados',
        color: '#d9a7d7',
        image: require('../assets/images/milk.png')
      },
      {
        _id: 6,
        name: 'Açougue',
        color: '#DDD',
        image: require('../assets/images/beef.png')
      },
      {
        _id: 7,
        name: 'Enlatados',
        color: '#445f80',
        image: require('../assets/images/tin.png')
      },
      {
        _id: 8,
        name: 'Hortifruti',
        color: '#9d74d4',
        image: require('../assets/images/apple.png')
      },
      {
        _id: 9,
        name: 'Mantimentos',
        color: '#34825c',
        image: require('../assets/images/rice.png')
      }
    ]
  );
}

export default {
  getAll
};