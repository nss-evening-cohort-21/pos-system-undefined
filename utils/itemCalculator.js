import renderToDOM from './renderToDOM';
// eslint-disable-next-line import/no-mutable-exports
let sumTogether = 0;
const itemsCalculator = (array) => {
  const sumArray = [];
  const initialValue = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    console.warn('item', item);
    console.warn('item.price', item.price);
    sumArray.push(Number(item.price));
  }
  console.warn('sumArray', sumArray);
  sumTogether = sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.warn('sumTogether', sumTogether);
  renderToDOM('#itemTotal', sumTogether);
};

export { itemsCalculator, sumTogether };
