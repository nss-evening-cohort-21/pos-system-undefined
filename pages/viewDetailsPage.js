import { getItem } from '../api/itemData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';
import itemsOnDetailsPage from './itemsOnDetailsPage';

// eslint-disable-next-line import/no-mutable-exports
let orderIdentify = '';
const viewDetailsPage = (order) => {
  orderIdentify = order.firebaseKey;
  clearDom();
  const domstring = `<h1>This is the  ${order.order_name} order</h1>
  <button id="addItemBtn">Add Item</button>
  <button id="addPaymentBtn">Add Payment</button>
  `;

  renderToDOM('#store', domstring);
  getItem(orderIdentify).then(itemsOnDetailsPage);
};

export { viewDetailsPage, orderIdentify };
