import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const createAnOrderPage = () => {
  clearDom();
  const domstring = 'This is the create an order page';
  renderToDOM('#store', domstring);
};
export default createAnOrderPage;
