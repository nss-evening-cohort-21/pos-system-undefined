import { orderArray } from '../components/createSearchOrderArray';
import searchOrderOnDom from '../components/searchOrderOnDom';

const searchOrderEvent = () => {
  document.querySelector('#search').addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
    // eslint-disable-next-line arrow-parens
    const searchResult = orderArray.filter(taco => taco.order_name.toLowerCase().includes(searchValue));
    searchOrderOnDom(searchResult);
  });
};
export default searchOrderEvent;
