import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createAnOrderPage = (obj = {}) => {
  clearDom();
  const domstring = `<form id="${obj.firebaseKey ? `update-Order--${obj.firebaseKey}` : 'submit-Order'}">
  <div class="form-group">
  <label for="orderName"></label></label>
  <input type="text" class="form-control" id="orderName" placeholder="Order Name">
</div>
<div class="form-group">
<label for="customerPhone"></label></label>
<input type="text" class="form-control" id="customerPhone" placeholder="Customer Phone">
</div>
  <div class="form-group">
    <label for="email"></label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
  </div>

  <div class="form-check">
  <input class="form-check-input" type="checkbox" id="orderedByPhone" checked>
  <label class="form-check-label" for="flexCheckChecked">
    Ordered by Phone
  </label>
</div>
  <button id="submitCreateOrder" type="submit" class="btn btn-primary">Create Order</button>
</form>`;
  renderToDOM('#form-container', domstring);
};
export default createAnOrderPage;
