import clearStore from '../utils/clearStore';
import renderToDOM from '../utils/renderToDOM';

const searchOrderOnDom = (arr) => {
  clearStore();
  let formCard = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    formCard += `<div class="card">
  
  <div class="card-body" style="height: 300px;">
    <h5 class="card-title">Term: ${item.order_name}</h5>
    <p>____________________________</p>
    <p>Definition: ${item.definition}</p>
    <p>Language: ${item.language}</p>
  <p>${item.time}</p>

    <i id="delete-Vocabulary-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"> Delete</i>
    <i id="edit-Vocabulary-btn--${item.firebaseKey}" class="logout-btn fas btn btn-info">Edit</i>
  </div>
</div>`;
  }
  renderToDOM('#store', formCard);
};
export default searchOrderOnDom;
