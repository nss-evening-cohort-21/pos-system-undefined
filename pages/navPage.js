import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import clearLoginBtn from '../utils/clearLoginBtn';
import renderToDOM from '../utils/renderToDOM';

const navPage = (user) => {
  clearLoginBtn();
  navBar();
  logoutButton();
  const domString = ` <h1>Welcome ${user.displayName}</h1> <button>View Orders</button><button>Create an Order</button>
  <button>View Revenue</button>`;

  renderToDOM('#store', domString);
};
export default navPage;
