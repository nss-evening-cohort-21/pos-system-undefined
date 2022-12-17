import { getItem, getItemPrice } from '../api/itemData';
import clearDom from '../utils/clearDom';
import { itemsCalculator } from '../utils/itemCalculator';
import renderToDOM from '../utils/renderToDOM';
import itemsOnDetailsPage from './itemsOnDetailsPage';

// eslint-disable-next-line import/no-mutable-exports
let orderIdentify = '';
// eslint-disable-next-line import/no-mutable-exports
let orderType = '';
const viewDetailsPage = (order) => {
  console.warn('order', order);
  orderIdentify = order.firebaseKey;
  orderType = order.is_phone;
  getItemPrice(orderIdentify).then((items) => (itemsCalculator(items)));

  clearDom();

  const domstring = `<h1>This is the  ${order.order_name} order</h1>
  <button id="addItemBtn" class="btn btn-secondary">Add Item <i class="fa-light fas fa-plus"></i></button>
  <button id="addPaymentBtn" class="btn btn-success">Add Payment <i class="fa-thin fas fa-dollar-sign"></i></button>
  <div id="orderTotal">
    <h3>Order Total</h3>
    <p class="dollarSign">$</p>
    <div id="itemTotal"></div>
  </div>
  `;

  renderToDOM('#store', domstring);
  getItem(orderIdentify).then(itemsOnDetailsPage);
};

export { viewDetailsPage, orderIdentify, orderType };
