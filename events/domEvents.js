// import { getItem } from '../api/itemData';
import deleteOrderItemsRelationship from '../api/mergedData';
import { getItem, getSingleItem } from '../api/itemData';
import { getOrder, getSingleOrder } from '../api/orderData';
import addPaymentPage from '../pages/addPaymentPage';
import createAnOrderPage from '../pages/createAnOrderPage';
import createItemPage from '../pages/createItemPage';
// import itemsOnDetailsPage from '../pages/itemsOnDetailsPage';
import { viewDetailsPage } from '../pages/viewDetailsPage';
import viewRevenuePage from '../pages/viewRevenue';
import clearDom from '../utils/clear/clearDom';
import clearStore from '../utils/clear/clearStore';

import getOrderByDeletedItem from '../utils/getOrderIdByDeletedItem';
import { createSearchOrderArray } from '../utils/createArray/createSearchOrderArray';
import { createSearchItemArray } from '../utils/createArray/createSearchItemArray';
import clearView from '../utils/clear/clearView';
import renderToDOM from '../utils/renderToDOM';
import sortOrders from '../utils/sortOrders';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // click event to view all orders
    if (e.target.id.includes('viewOrders')) {
      console.warn('CLICKED viewOrders', e.target.id);
      getOrder(user.uid).then(sortOrders);
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
    }
    if (e.target.id.includes('edit-Item-btn')) {
      clearView();
      clearStore();
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((item) => createItemPage(item));
    }
    if (e.target.id.includes('delete-Item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this item?')) {
        getOrderByDeletedItem(firebaseKey);
      }
    }
    // FILTER BY ALL ORDERS
    if (e.target.id.includes('allOrders')) {
      getOrder(user.uid).then(sortOrders);
    }
    // FILTER BY OPEN ORDERS
    if (e.target.id.includes('openOrders')) {
      getOrder(user.uid).then((arr) => {
        let domStringFilter = '';
        arr.forEach((item) => {
          if (item.is_open === true) {
            domStringFilter += `<div class="card">
    
          <div class="card-body" style="height: 350px;">
            <h5 class="card-title">Order: ${item.order_name}</h5>
            <p>____________________________</p>
           <div class="definition"> <p>Phone Number: ${item.phone_number}</p></div>
            <p>email: ${item.email}</p>
          <p>${item.date}</p>
          <p>${item.is_phone === true ? 'Phone Order' : 'In Person'}</p>
          <p>${item.is_open === true ? 'order open' : 'order closed'}</p>
            
            ${item.is_open === true ? `<i id="edit-Order-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info"><i class="fas fa-edit"></i> Edit</i>` : ''}
            ${item.is_open === true ? `<i id="details-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-success fas"><i class="fas fa-eye"></i> View Details</i>` : ''}
            ${item.is_open === true ? `<i id="delete-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"><i class="fas fa-trash-alt"></i> Delete</i>` : ''}

    
        </div>`;
          }
          renderToDOM('#store', domStringFilter);
        });
      });
    }
    // FILTER BY CLOSED ORDERS
    if (e.target.id.includes('closedOrders')) {
      getOrder(user.uid).then((arr) => {
        let domStringFilter = '';
        arr.forEach((item) => {
          if (item.is_open === false) {
            domStringFilter += `<div class="card">
    
          <div class="card-body" style="height: 350px;">
            <h5 class="card-title">Order: ${item.order_name}</h5>
            <p>____________________________</p>
           <div class="definition"> <p>Phone Number: ${item.phone_number}</p></div>
            <p>email: ${item.email}</p>
          <p>${item.date}</p>
          <p>${item.is_phone === true ? 'Phone Order' : 'In Person'}</p>
          <p>${item.is_open === true ? 'order open' : 'order closed'}</p>
            
            ${item.is_open === true ? `<i id="edit-Order-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info"><i class="fas fa-edit"></i> Edit</i>` : ''}
            <i id="details-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-success fas"><i class="fas fa-eye"></i> View Details</i>
            ${item.is_open === true ? `<i id="delete-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"><i class="fas fa-trash-alt"></i> Delete</i>` : ''}

    
        </div>`;
          }
          renderToDOM('#store', domStringFilter);
        });
      });
    }
    // CLICK EVENT FOR DELETING AN ORDER
    if (e.target.id.includes('delete-Order-btn')) {
      console.warn('CLICKED delete-Order-btn', e.target.id);
      // eslint-disable-next-line no-alert
      if (window.confirm('You sure you wanna delete this whole order?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderItemsRelationship(firebaseKey).then(() => {
          getOrder(user.uid).then(createSearchOrderArray);
          getOrder(user.uid).then(sortOrders);
        });
      }
    }
  });
};
export default domEvents;
