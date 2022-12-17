import searchItemOnDom from '../pages/searchOnDom/searchItemOnDom';
import { itemArray } from '../utils/createArray/createSearchItemArray';

const searchItemEvent = () => {
  document.querySelector('#search').addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);
    // eslint-disable-next-line arrow-parens
    const searchResult = itemArray.filter(taco => taco.name.toLowerCase().includes(searchValue)
    || taco.price.toLowerCase().includes(searchValue));
    searchItemOnDom(searchResult);
  });
};
export default searchItemEvent;
