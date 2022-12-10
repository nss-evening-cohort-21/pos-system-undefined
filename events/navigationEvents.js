import createAnOrderPage from '../pages/createAnOrderPage';
import homePage from '../pages/homePage';
import viewOrdersPage from '../pages/viewOrdersPage';

const navigationEvents = (user) => {
  document.querySelector('#viewOrders').addEventListener('click', () => {
    viewOrdersPage();
  });
  document.querySelector('#createAnOrderPage').addEventListener('click', () => {
    createAnOrderPage();
  });
  document.querySelector('#logoHomePage').addEventListener('click', () => {
    homePage(user);
  });
};

export default navigationEvents;