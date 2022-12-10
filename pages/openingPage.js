import loginButton from '../components/loginButton';
import renderToDOM from '../utils/renderToDOM';

const openingPage = () => {
  loginButton();
  const domstring = '<img class="opening-logo" src ="https://thumbs.dreamstime.com/b/pizza-pepperoni-cheese-salami-vegetables-58914487.jpg">';
  renderToDOM('#store', domstring);
};
export default openingPage;
