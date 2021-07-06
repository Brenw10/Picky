function get() {
  return Promise.resolve(
    [
      {
        _id: 1,
        name: 'Comercial Esperança',
        district: 'Centro',
        street: 'Av. Dr. Nelson d Ávila',
        number: 29,
        city: 'São José dos Campos',
      },
      {
        _id: 2,
        name: 'Extra',
        district: 'Centro',
        street: 'Av. Dr. Nelson d Ávila',
        number: 29,
        city: 'São José dos Campos',
      },
    ].sort((a, b) => a.name.localeCompare(b.name))
  );
}

export default {
  get
};