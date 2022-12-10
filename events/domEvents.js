import { getOrder, getSingleOrder } from '../api/orderData';
import addPaymentPage from '../pages/addPaymentPage';
import createAnOrderPage from '../pages/createAnOrderPage';
import createItemPage from '../pages/createItemPage';
import viewDetailsPage from '../pages/viewDetailsPage';
import viewOrdersPage from '../pages/viewOrdersPage';
import viewRevenuePage from '../pages/viewRevenue';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrders')) {
      getOrder(user.uid).then(viewOrdersPage);
    }
    if (e.target.id.includes('createAnOrder')) {
      createAnOrderPage();
    }
    if (e.target.id.includes('viewRevenue')) {
      viewRevenuePage();
    }
    if (e.target.id.includes('details-Order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(viewDetailsPage);
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }
    if (e.target.id.includes('addItemBtn')) {
      createItemPage();
    }
    if (e.target.id.includes('addPaymentBtn')) {
      addPaymentPage();
    }
  });
};

export default domEvents;
