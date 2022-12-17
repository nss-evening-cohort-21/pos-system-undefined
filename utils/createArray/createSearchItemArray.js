// eslint-disable-next-line prefer-const, import/no-mutable-exports
let itemArray = [];
const createSearchItemArray = (array) => {
  itemArray = [];
  array.forEach((item) => {
    itemArray.push(item);
  });
};
export { createSearchItemArray, itemArray };
