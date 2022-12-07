import loginButton from '../components/loginButton';
import renderToDOM from '../utils/renderToDOM';

const openingPage = () => {
  loginButton();
  const domstring = '<div>LOGO GO HERE</div>';
  renderToDOM('#store', domstring);
};
export default openingPage;
