import { getOrder } from '../api/orderData';
import createAnOrderPage from '../pages/createAnOrderPage';
import homePage from '../pages/homePage';
import { viewOrdersPage } from '../pages/viewOrdersPage';
import clearDom from '../utils/clear/clearDom';

const navigationEvents = (user) => {
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrder(user.uid).then(viewOrdersPage);
  });
  document.querySelector('#createAnOrderPage').addEventListener('click', () => {
    createAnOrderPage();
  });
  document.querySelector('#logoHomePage').addEventListener('click', () => {
    clearDom();
    homePage(user);
  });
};

export default navigationEvents;
