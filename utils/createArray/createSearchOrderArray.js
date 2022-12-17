// eslint-disable-next-line prefer-const, import/no-mutable-exports
let orderArray = [];
const createSearchOrderArray = (array) => {
  orderArray = [];
  array.forEach((item) => {
    orderArray.push(item);
  });
};
export { createSearchOrderArray, orderArray };
