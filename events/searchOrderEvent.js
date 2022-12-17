import searchOrderOnDom from '../pages/searchOnDom/searchOrderOnDom';
import clearView from '../utils/clear/clearView';
import { orderArray } from '../utils/createArray/createSearchOrderArray';

const searchOrderEvent = () => {
  document.querySelector('#search').addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
    // eslint-disable-next-line arrow-parens
    const searchResult = orderArray.filter(taco => taco.order_name.toLowerCase().includes(searchValue)
    || taco.phone_number.toLowerCase().includes(searchValue)
    || taco.email.toLowerCase().includes(searchValue)
    || taco.date.toLowerCase().includes(searchValue));
    searchOrderOnDom(searchResult);
    clearView();
  });
};
export default searchOrderEvent;
