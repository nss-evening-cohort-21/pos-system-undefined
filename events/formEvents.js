import { createItem, getItem, updateItem } from '../api/itemData';
import {
  createOrder, getOrder, getSingleOrder, updateOrder
} from '../api/orderData';
import { createRevenue, getRevenue } from '../api/revenueData';
import itemsOnDetailsPage from '../pages/itemsOnDetailsPage';
import { viewDetailsPage, orderIdentify, orderType } from '../pages/viewDetailsPage';
import { viewOrdersPage } from '../pages/viewOrdersPage';
import viewRevenuePage from '../pages/viewRevenue';
import clearFormContainer from '../utils/clearFormContainer';
import { sumTogether } from '../utils/itemCalculator';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-Order')) {
      console.warn('why no do');
      const payload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#email').value,
        uid: user.uid,
        date: new Date().toLocaleString(),
        is_phone: document.querySelector('#orderedByPhone').checked,
        is_open: true,
        firebaseKey: ''
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrder(user.uid).then(viewOrdersPage);
        });
      });
    }
    if (e.target.id.includes('submit-Item')) {
      console.warn('submit item button pressed');
      const payload = {
        order_id: orderIdentify.toString(),
        name: document.querySelector('#item_name').value,
        price: document.querySelector('#price').value,
        uid: user.uid,
        firebaseKey: ''
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateItem(patchPayload).then(() => {
          getSingleOrder(orderIdentify).then(viewDetailsPage);
          getItem(orderIdentify).then(itemsOnDetailsPage);
        });
      });
    }
    if (e.target.id.includes('update-Order')) {
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn('CLICKED UPDATE BOOK', e.target.id);

      const payload = {
        order_name: document.querySelector('#orderName').value,
        phone_number: document.querySelector('#customerPhone').value,
        email: document.querySelector('#email').value,
        uid: user.uid,
        date: new Date().toLocaleString(),
        is_phone: document.querySelector('#orderedByPhone').checked,
        is_open: true,
        firebaseKey
      };
      updateOrder(payload).then(() => {
        getOrder(user.uid).then(viewOrdersPage);
      });
    }
    if (e.target.id.includes('update-Item')) {
      const [, firebaseKey] = e.target.id.split('--');
      // console.warn('CLICKED UPDATE BOOK', e.target.id);

      const payload = {
        order_id: orderIdentify.toString(),
        name: document.querySelector('#item_name').value,
        price: document.querySelector('#price').value,
        uid: user.uid,
        firebaseKey
      };
      updateItem(payload).then(() => {
        getItem(orderIdentify).then(itemsOnDetailsPage);
        clearFormContainer();
        getSingleOrder(orderIdentify).then(viewDetailsPage);
      });
    }
    if (e.target.id.includes('submit-revenue')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        order_id: orderIdentify.toString(),
        order_amt: document.querySelector('#tip-amt').valueAsNumber + sumTogether,
        tip_amt: document.querySelector('#tip-amt').value,
        payment_type: document.querySelector('#paymentDropDown').value,
        order_type: orderType.toString(),
        date: new Date().toLocaleString(),
        uid: user.uid,
        firebaseKey
      };

      createRevenue(payload);
      getSingleOrder(orderIdentify).then((order) => {
        const payload2 = {
          is_open: !order.is_open,
          firebaseKey: orderIdentify
        };
        updateOrder(payload2).then(() => {
          getRevenue(firebaseKey).then(viewRevenuePage);
        });
      });
    }
  });
};

export default formEvents;
