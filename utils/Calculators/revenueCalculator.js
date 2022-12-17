import renderToDOM from '../renderToDOM';
// eslint-disable-next-line import/no-mutable-exports
let sumRevTogether = 0;
const revCalculator = (array) => {
  const sumArray = [];
  const initialValue = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const item of array) {
    sumArray.push(Number(item.order_amt));
  }
  sumRevTogether = sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  renderToDOM('#revTotal', sumRevTogether);
};

export { revCalculator, sumRevTogether };
