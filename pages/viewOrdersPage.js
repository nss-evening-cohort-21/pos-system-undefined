import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrdersPage = () => {
  clearDom();
  const domstring = 'This is the viewOrdersPage';
  renderToDOM('#store', domstring);
};
export default viewOrdersPage;
