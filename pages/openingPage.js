import loginButton from '../components/loginButton';
import renderToDOM from '../utils/renderToDOM';
import pizzabeat from '../assets/pizzabeat.jpg';

const openingPage = () => {
  const domstring = `<img class="opening-logo" src =${pizzabeat} alt = "pizza beat logo">`;
  loginButton();
  renderToDOM('#store', domstring);
};
export default openingPage;
