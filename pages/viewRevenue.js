import { getRevenuePrice } from '../api/revenueData';
import clearDom from '../utils/clear/clearDom';
import renderToDOM from '../utils/renderToDOM';
import { revCalculator } from '../utils/Calculators/revenueCalculator';
import { orderIdentify } from './viewDetailsPage';

const viewRevenuePage = () => {
  getRevenuePrice(orderIdentify).then((rev) => revCalculator(rev));
  clearDom();
  const domstring = `
  <h1>Revenue</h1> <i class="fa-solid fa-wave-pulse"></i>
  <div id="orderTotal">
    <h3>Total Revenue for Orders:</h3>
    <p class="dollarSign"><i class="fas fa-dollar-sign"></i></p>
    <h3><div id="revTotal"></div></h3>
  </div>
  <hr>
  <div id="dateRangeBox">
    <h4>Date Range:</h4>
    <input type="date" id="startDate">
    <input type="date" id="endDate">
    <button class="btn btn-dark" id="dateButton">Submit Range</button>
  </div>
  <hr>
  <p>Total Sum of Revenue for Date Range:</p>
  <div id="revDateRangeTotal"></div>
  `;
  renderToDOM('#store', domstring);
};

export default viewRevenuePage;
