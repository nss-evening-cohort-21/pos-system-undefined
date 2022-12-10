import renderToDOM from '../utils/renderToDOM';

const createItemPage = () => {
  const domString = `<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name Of Item</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Price</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
  </div>
  <button type="submit" class="btn btn-primary">Add/Edit</button>
</form>`;

  renderToDOM('#store', domString);
};
export default createItemPage;
