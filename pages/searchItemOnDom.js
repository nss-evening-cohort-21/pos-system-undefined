import clearStore from '../utils/clearStore';
import renderToDOM from '../utils/renderToDOM';

const searchItemOnDom = (arr) => {
  clearStore();
  let formCard = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    formCard += `<div class="card">
    
    <div class="card-body" style="height: 300px;">
      <h5 class="card-title">Item: ${item.name}</h5>
      <p>____________________________</p>
      <p>Price:$ ${item.price}</p>
    
      
      <i id="edit-Item-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info">Edit</i>

      
      <i id="delete-Item-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"> Delete</i>
    </div>

  </div>`;
  }
  renderToDOM('#view', formCard);
};
export default searchItemOnDom;
