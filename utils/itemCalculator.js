import renderToDOM from './renderToDOM';
// eslint-disable-next-line import/no-mutable-exports
let sumTogether = 0;
const itemsCalculator = (array) => {
  const sumArray = [];
  const initialValue = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    sumArray.push(Number(item.price));
  }
  sumTogether = sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  renderToDOM('#itemTotal', sumTogether);
};

export { itemsCalculator, sumTogether };
