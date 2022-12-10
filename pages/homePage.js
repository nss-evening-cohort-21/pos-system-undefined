import clearLoginBtn from '../utils/clearLoginBtn';
import renderToDOM from '../utils/renderToDOM';

const homePage = (user) => {
  clearLoginBtn();
  const domString = ` <h1>Welcome ${user.displayName}</h1> 
  <div class="buttonHolder"><div class="homescreen-btns"> 
  <button id="viewOrders">View Orders</button>
  <button id="createAnOrderPage">Create an Order</button>
  <button id="viewRevenue">View Revenue</button>
  </div></div>`;

  renderToDOM('#store', domString);
};
export default homePage;
