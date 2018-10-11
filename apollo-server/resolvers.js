const Apple = {
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

const Melon = {
  _id: 124,
  _key: 'Fruit/124',
  name: 'Melon',
  color: 'Yellow',
  shape: 'Oval',
  isTasty: true,
  isTropic: true,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const Strawberry = {
  _id: 125,
  _key: 'Fruit/125',
  name: 'Strawberry',
  color: 'Red',
  shape: 'Oval',
  isTasty: true,
  isTropic: false,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const fruits = [Apple, Melon, Strawberry];

export default {
  Query: {
    fetchFruit: (root, { _key }) => fruits.find(f => f._key === _key),
    fetchFruits: () => fruits,
  },

  Mutation: {
    createFruit: (root, { fruit }) => {
      fruits.push(fruit);
      return fruit;
    },
    updateFruit: (root, { _key, fruit }) => {
      const f = fruits.find(f => f._key === _key);
      Object.assign(f, fruit);
      return fruit;
    },
  },
};
