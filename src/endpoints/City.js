function getAll() {
  return Promise.resolve(
    [
      {
        _id: 1,
        name: 'São José dos Campos',
      },
      {
        _id: 2,
        name: 'Mogi das Cruzes',
      },
    ]
  );
}

export default {
  getAll
};