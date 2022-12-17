import clearLoginBtn from '../utils/clear/clearLoginBtn';
import renderToDOM from '../utils/renderToDOM';

const homePage = (user) => {
  clearLoginBtn();
  const domString = `
    <h1>Welcome ${user.displayName}</h1> 
    <div class="d-grid gap-2 col-6 mx-auto">
      <button id="viewOrders" class="btn btn-primary" type="button"><i class="fas fa-eye"></i> View Orders</button>
      <button id="createAnOrderPage" class="btn btn-success" type="button"><i class="fas fa-utensils"></i>  Create an Order</button>
      <button id="viewRevenue" class="btn btn-dark" type="button"><i class="fas fa-eye"></i> View Revenue</button>
    </div>
    `;
  renderToDOM('#store', domString);
};
export default homePage;
