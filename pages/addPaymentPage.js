import clearDom from '../utils/clear/clearDom';
import renderToDOM from '../utils/renderToDOM';

const addPaymentPage = () => {
  clearDom();
  const domString = `<form id="submit-revenue">
  <div class="dropdown"></div>
  <button class=" logout-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select Payment Type
  </button>
  <select id="paymentDropDown"  class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <option value="debit" class="dropdown-item" id="paymentOne">DEBIT</option>
    <option value="cash" class="dropdown-item" id="paymentTwoe">CASH</option>
    <option value="credit" class="dropdown-item" id="paymentThree">CREDIT</option>
    <option value="check" class="dropdown-item" id="paymentFour">CHECK</option>
    <option value="mobile-payment" class="dropdown-item" id="paymentFive">MOBILE-PAYMENT</option>
   
  </select>
</div>
  <div class="form-group">
    <label for="exampleInputPassword1">Tip Amount</label>
    <input type="number" class="form-control" id="tip-amt" placeholder="">
  </div>
  <button type="submit" class="btn btn-primary">Close Order</button>
</form>`;

  renderToDOM('#store', domString);
};
export default addPaymentPage;
