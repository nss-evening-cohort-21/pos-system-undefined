import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const addPaymentPage = () => {
  clearDom();
  const domString = `<form>
  <div class="dropdown"></div>
  <button class=" logout-btn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Select Payment Type
  </button>
  <select id="languageDropDown"  class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <option class="dropdown-item" id="languageOne">DEBIT</option>
    <option class="dropdown-item" id="languageTwo">CASH</option>
    <option class="dropdown-item" id="languageThree">ARM and LEG</option>
   
  </select>
</div>
  <div class="form-group">
    <label for="exampleInputPassword1">Tip Amount</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="">
  </div>
  <button type="submit" class="btn btn-primary">Close Order</button>
</form>`;

  renderToDOM('#store', domString);
};
export default addPaymentPage;
