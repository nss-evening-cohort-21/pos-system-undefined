import { deleteItem, getSingleItem } from '../api/itemData';
import { getSingleOrder } from '../api/orderData';
import { viewDetailsPage } from '../pages/viewDetailsPage';

const getOrderByDeletedItem = (firebaseKey) => {
  getSingleItem(firebaseKey).then((obj) => {
    const order = obj.order_id;
    console.warn(order);
    deleteItem(firebaseKey);
    getSingleOrder(order).then(viewDetailsPage);
  });
};

export default getOrderByDeletedItem;
