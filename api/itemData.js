import client from '../utils/client';

const endpoint = client.databaseURL;

const createItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const getItem = (orderIdentify) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item.json?orderBy="order_id"&equalTo="${orderIdentify}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});
const getItemPrice = (orderIdentify) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item.json?orderBy="order_id"&equalTo="${orderIdentify}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const itemPrice = Object.values(data).filter((item) => item.price);
      resolve(itemPrice);
    })
    .catch(reject);
});
const updateItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});
const deleteItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});
const getSingleItem = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/item/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});
export {
  createItem,
  getItem,
  updateItem,
  deleteItem,
  getSingleItem,
  getItemPrice
};
