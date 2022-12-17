import renderToDOM from '../../utils/renderToDOM';
import logoutButton from '../logButtons/logoutButton';

const navBar = () => {
  const domString = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
 

  <div id="logout"></div>

</div>
</nav>`;
  renderToDOM('#navigation', domString);
  logoutButton();
};

export default navBar;
