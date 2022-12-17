// import { getItem } from '../api/itemData';
import deleteOrderItemsRelationship from '../api/mergedData';
import { getItem, getSingleItem } from '../api/itemData';
import { getOrder, getSingleOrder } from '../api/orderData';
import addPaymentPage from '../pages/addPaymentPage';
import createAnOrderPage from '../pages/createAnOrderPage';
import createItemPage from '../pages/createItemPage';
// import itemsOnDetailsPage from '../pages/itemsOnDetailsPage';
import { viewDetailsPage } from '../pages/viewDetailsPage';
import { viewOrdersPage } from '../pages/viewOrdersPage';
import viewRevenuePage from '../pages/viewRevenue';
import clearDom from '../utils/clear/clearDom';
import clearStore from '../utils/clear/clearStore';

import getOrderByDeletedItem from '../utils/getOrderIdByDeletedItem';
import { createSearchOrderArray } from '../utils/createArray/createSearchOrderArray';
import { createSearchItemArray } from '../utils/createArray/createSearchItemArray';
import clearView from '../utils/clear/clearView';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event to view all orders
    if (e.target.id.includes('viewOrders')) {
      console.warn('CLICKED viewOrders', e.target.id);
      getOrder(user.uid).then(viewOrdersPage);
      getOrder(user.uid).then(createSearchOrderArray);
    }
    if (e.target.id.includes('createAnOrder')) {
      console.warn('CLICKED createAnOrder', e.target.id);
      createAnOrderPage();
    }
    if (e.target.id.includes('viewRevenue')) {
      console.warn('CLICKED viewRevenue', e.target.id);
      viewRevenuePage();
    }
    if (e.target.id.includes('details-Order-btn')) {
      console.warn('CLICKED details-Order-btn', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then(viewDetailsPage);
      getItem(firebaseKey).then(createSearchItemArray);
    }
    if (e.target.id.includes('addItemBtn')) {
      console.warn('CLICKED addItemBtn', e.target.id);
      clearDom();
      createItemPage();
    }
    if (e.target.id.includes('addPaymentBtn')) {
      console.warn('CLICKED viewRevenue', e.target.id);
      addPaymentPage();
    }
    if (e.target.id.includes('edit-Order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((order) => createAnOrderPage(order));
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }
    if (e.target.id.includes('edit-Item-btn')) {
      clearView();
      clearStore();
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((item) => createItemPage(item));
    }
    // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    if (e.target.id.includes('delete-Item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this item?')) {
        getOrderByDeletedItem(firebaseKey);
      }
    }
    // FILTER BY OPEN ORDERS
    if (e.target.id.includes('openOrders')) {
      getOrder(user.uid).then((arr) => {
        let domStringFilter = '';
        arr.forEach((order) => 
        if (order.is_open===true) {
          domStringFilter += ``
        });
      })
    }
    // CLICK EVENT FOR DELETING AN ORDER
    if (e.target.id.includes('delete-Order-btn')) {
      console.warn('CLICKED delete-Order-btn', e.target.id);
      // eslint-disable-next-line no-alert
      if (window.confirm('You sure you wanna delete this whole order?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderItemsRelationship(firebaseKey).then(() => {
          getOrder(user.uid).then(viewOrdersPage);
        });
      }
    }
  });
};
export default domEvents;
