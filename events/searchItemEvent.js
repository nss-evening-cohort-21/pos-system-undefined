import { getSingleOrder } from '../api/orderData';
import searchItemOnDom from '../pages/searchOnDom/searchItemOnDom';
// eslint-disable-next-line import/no-cycle
import { orderIdentify } from '../pages/viewDetailsPage';
import { itemArray } from '../utils/createArray/createSearchItemArray';

const searchItemEvent = () => {
  document.querySelector('#search').addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
    // eslint-disable-next-line arrow-parens
    const searchResult = itemArray.filter(taco => taco.name.toLowerCase().includes(searchValue)
    || taco.price.toLowerCase().includes(searchValue));
    getSingleOrder(orderIdentify).then((order) => {
      searchItemOnDom(order, searchResult);
    });
  });
};

export default searchItemEvent;
