import createAnOrderPage from '../pages/createAnOrderPage';
import viewOrdersPage from '../pages/viewOrdersPage';
import viewRevenuePage from '../pages/viewRevenue';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrders')) {
      viewOrdersPage();
    }
    if (e.target.id.includes('createAnOrder')) {
      createAnOrderPage();
    }
    if (e.target.id.includes('viewRevenue')) {
      viewRevenuePage();
    }
  });
};

export default domEvents;
