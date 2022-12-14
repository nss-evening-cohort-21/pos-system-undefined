import renderToDOM from '../utils/renderToDOM';

const createItemPage = (obj = {}) => {
  const domString = `<form id="${obj.firebaseKey ? `update-Item--${obj.firebaseKey}` : 'submit-Item'}">
  <div class="form-group">
    <label for="exampleInputEmail1">Name Of Item</label>
    <input type="text" class="form-control" id="item_name" aria-describedby="emailHelp" placeholder="" value="${obj.name || ''}">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="number" min="0.00" max="9999999" step="0.01" class="form-control" id="price" placeholder="" value="${obj.price || ''}">
  </div>
  <button type="submit" class="btn btn-primary">Add/Edit</button>
</form>`;

  renderToDOM('#form-container', domString);
};
export default createItemPage;
