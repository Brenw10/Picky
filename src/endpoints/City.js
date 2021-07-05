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
    ].sort((a, b) => a.name.localeCompare(b.name))
  );
}

export default {
  getAll
};