import { getItem, getItemPrice } from '../api/itemData';
import searchItemEvent from '../events/searchItemEvent';
import clearDom from '../utils/clear/clearDom';
import { itemsCalculator } from '../utils/Calculators/itemCalculator';
import renderToDOM from '../utils/renderToDOM';
import itemsOnDetailsPage from './itemsOnDetailsPage';

// eslint-disable-next-line import/no-mutable-exports
let orderIdentify = '';
// eslint-disable-next-line import/no-mutable-exports
let orderType = '';
const viewDetailsPage = (order) => {
  orderIdentify = order.firebaseKey;
  orderType = order.is_phone;
  getItemPrice(orderIdentify).then((items) => (itemsCalculator(items)));

  clearDom();

  const domstring = ` <form class="form-inline my-2 my-lg-0">
  <input  id="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
 </form><h1>This is the  ${order.order_name} order</h1>
  <button id="addItemBtn">Add Item</button>
  <button id="addPaymentBtn">Add Payment</button>
 <div id="orderTotal"><h3>Order Total</h3><p class="dollarSign">$</p><div id="itemTotal"></div></div>
  `;

  renderToDOM('#form-container', domstring);
  getItem(orderIdentify).then(itemsOnDetailsPage);
  searchItemEvent();
};

export { viewDetailsPage, orderIdentify, orderType };
