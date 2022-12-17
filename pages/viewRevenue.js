import { getRevenuePrice } from '../api/revenueData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';
import { revCalculator } from '../utils/revenueCalculator';
import { orderIdentify } from './viewDetailsPage';

const viewRevenuePage = () => {
  getRevenuePrice(orderIdentify).then((rev) => revCalculator(rev));
  clearDom();
  const domstring = `
  <h1>Total Revenue</h1> <i class="fa-solid fa-wave-pulse"></i>
  <div id="orderTotal">
    <h3>Order Total</h3>
    <p class="dollarSign"><i class="fas fa-dollar-sign"></i></p>
    <h3><div id="revTotal"></div></h3>
  </div>`;
  renderToDOM('#store', domstring);
};

export default viewRevenuePage;
