import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewDetailsPage = (order) => {
  clearDom();
  const domstring = `This is the viewDetailsPage ${order.order_name}
  <button id="addItemBtn">Add Item</button>
  <button id="addPaymentBtn">Add Payment</button>`;
  renderToDOM('#store', domstring);
};

export default viewDetailsPage;
