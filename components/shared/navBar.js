import renderToDOM from '../../utils/renderToDOM';
import logoutButton from '../logoutButton';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a id="logoHomePage" class="navbar-brand" href="#"><img class="nav-logo" src="https://thumbs.dreamstime.com/b/pizza-pepperoni-cheese-salami-vegetables-58914487.jpg"></a>

<div class="collapse navbar-collapse" id="navbarSupportedContent">

  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a id="viewOrders" class="nav-link" href="#">View All Orders</a>
    </li>
    <li class="nav-item">
      <a id="createAnOrderPage" class="nav-link" href="#">Create an Order</a>
    </li>
  </ul>

  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  </form>

  <div id="logout"></div>

</div>
</nav>`;
  renderToDOM('#navigation', domString);
  logoutButton();
};

export default navBar;
