import clearDom from '../utils/clear/clearDom';
import renderToDOM from '../utils/renderToDOM';

const addPaymentPage = () => {
  clearDom();
  const domString = `
  <form id="submit-revenue">
  <label for="payment">Please Select a Payment Type:</label>
  <select id="paymentDropDown"  class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" aria-labelledby="dropdownMenuButton">
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
