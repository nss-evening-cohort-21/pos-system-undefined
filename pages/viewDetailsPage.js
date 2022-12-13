import { getItem, getItemPrice } from '../api/itemData';
import clearDom from '../utils/clearDom';
import { itemsCalculator } from '../utils/itemCalculator';
import renderToDOM from '../utils/renderToDOM';
import itemsOnDetailsPage from './itemsOnDetailsPage';

// eslint-disable-next-line import/no-mutable-exports
let orderIdentify = '';
const viewDetailsPage = (order) => {
  orderIdentify = order.firebaseKey;
  getItemPrice(orderIdentify).then((items) => (itemsCalculator(items)));

  clearDom();

  const domstring = `<h1>This is the  ${order.order_name} order</h1>
  <button id="addItemBtn">Add Item</button>
  <button id="addPaymentBtn">Add Payment</button>
  <div id="itemTotal"></div>
  `;

  renderToDOM('#store', domstring);
  getItem(orderIdentify).then(itemsOnDetailsPage);
};

export { viewDetailsPage, orderIdentify };
