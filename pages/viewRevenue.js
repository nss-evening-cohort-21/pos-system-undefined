import { getRevenuePrice } from '../api/revenueData';
import clearDom from '../utils/clear/clearDom';
import renderToDOM from '../utils/renderToDOM';
import { revCalculator } from '../utils/Calculators/revenueCalculator';
import { orderIdentify } from './viewDetailsPage';

const viewRevenuePage = () => {
  getRevenuePrice(orderIdentify).then((rev) => revCalculator(rev));
  clearDom();
  const domstring = `This is the viewRevenuePage
  <div id="orderTotal"><h3>Order Total</h3><p class="dollarSign">$</p><div id="revTotal"></div></div>`;
  renderToDOM('#store', domstring);
};

export default viewRevenuePage;
