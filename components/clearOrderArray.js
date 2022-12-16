import clearStore from '../utils/clearStore';

const clearOrderArray = (arr) => {
  clearStore();
  // eslint-disable-next-line no-param-reassign
  arr = [];
  return arr;
};
export default clearOrderArray;
