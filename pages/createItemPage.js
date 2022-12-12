import renderToDOM from '../utils/renderToDOM';

const createItemPage = (obj = {}) => {
  const domString = `<form id="${obj.firebaseKey ? `update-Order--${obj.firebaseKey}` : 'submit-Item'}">
  <div class="form-group">
    <label for="exampleInputEmail1">Name Of Item</label>
    <input type="text" class="form-control" id="item_name" aria-describedby="emailHelp" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="text" class="form-control" id="price" placeholder="">
  </div>
  <button type="submit" class="btn btn-primary">Add/Edit</button>
</form>`;

  renderToDOM('#store', domString);
};
export default createItemPage;
