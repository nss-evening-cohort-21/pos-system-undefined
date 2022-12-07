import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import clearLoginBtn from '../utils/clearLoginBtn';
import renderToDOM from '../utils/renderToDOM';

const navPage = (user) => {
  clearLoginBtn();
  navBar();
  logoutButton();
  const domString = ` <h1>Welcome ${user.displayName}</h1> <div class="buttonHolder"><div class="homescreen-btns"> <button>View Orders</button><button>Create an Order</button>
  <button>View Revenue</button></div></div>`;

  renderToDOM('#store', domString);
};
export default navPage;
