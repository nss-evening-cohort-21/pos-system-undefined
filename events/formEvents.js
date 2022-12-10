import { createOrder, getOrder, updateOrder } from '../api/orderData';
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
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrder(user.uid).then(viewOrdersPage);
        });
      });
    }
  });
};

export default formEvents;
