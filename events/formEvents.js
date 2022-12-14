import { createItem, getItem, updateItem } from '../api/itemData';
import {
  createOrder, getOrder, getSingleOrder, updateOrder
} from '../api/orderData';
import itemsOnDetailsPage from '../pages/itemsOnDetailsPage';
import { viewDetailsPage, orderIdentify } from '../pages/viewDetailsPage';
import viewOrdersPage from '../pages/viewOrdersPage';

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
  });
};

export default formEvents;
