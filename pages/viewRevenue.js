import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewRevenuePage = () => {
  clearDom();
  const domstring = 'This is the viewRevenuePage';
  renderToDOM('#store', domstring);
};

export default viewRevenuePage;
