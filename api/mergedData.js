import { deleteItem, getItem } from './itemData';
import { deleteOrder } from './orderData';

const deleteOrderItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItem(firebaseKey).then((itemArray) => {
    const deleteItemPromises = itemArray.map((item) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export default deleteOrderItemsRelationship;
