import client from '../utils/client';

const endpoint = client.databaseURL;

const createRevenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json`, {
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
const getRevenue = (orderIdentify) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue.json?orderBy="order_id"&equalTo="${orderIdentify}"`, {
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
const updateRevenue = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${payload.firebaseKey}.json`, {
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
const deleteRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});
const getSingleRevenue = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue/${firebaseKey}.json`, {
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
  createRevenue,
  getRevenue,
  updateRevenue,
  deleteRevenue,
  getSingleRevenue
};
