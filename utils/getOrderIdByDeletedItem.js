import { deleteItem, getItem, getSingleItem } from '../api/itemData';
import { getSingleOrder } from '../api/orderData';
import { viewDetailsPage } from '../pages/viewDetailsPage';
import { createSearchItemArray } from './createArray/createSearchItemArray';

const getOrderByDeletedItem = (firebaseKey) => {
  getSingleItem(firebaseKey).then((obj) => {
    const order = obj.order_id;
    deleteItem(firebaseKey);
    getItem(order).then(createSearchItemArray);
    getSingleOrder(order).then(viewDetailsPage);
  });
};

export default getOrderByDeletedItem;
