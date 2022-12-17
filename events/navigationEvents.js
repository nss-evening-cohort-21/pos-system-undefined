import { getOrder } from '../api/orderData';
import createAnOrderPage from '../pages/createAnOrderPage';
import homePage from '../pages/homePage';
import { viewOrdersPage } from '../pages/viewOrdersPage';
import clearDom from '../utils/clear/clearDom';
import { createSearchOrderArray } from '../utils/createArray/createSearchOrderArray';

const navigationEvents = (user) => {
  document.querySelector('#viewOrders').addEventListener('click', () => {
    getOrder(user.uid).then(viewOrdersPage);
    getOrder(user.uid).then(createSearchOrderArray);
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
