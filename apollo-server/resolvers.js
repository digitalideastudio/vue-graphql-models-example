const Fruit = {
  _id: 123,
  _key: 'Fruit/123',
  name: 'Apple',
  color: 'Green',
  shape: 'Round',
  isTasty: true,
  isTropic: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default {
  Query: {
    fetchFruit: () => Fruit,
    fetchFruits: () => [Fruit, Fruit, Fruit],
  },

  Mutation: {
    createFruit: () => Fruit,
    updateFruit: () => Fruit,
  },
};
