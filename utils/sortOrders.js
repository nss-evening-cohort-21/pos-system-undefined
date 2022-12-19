import { viewOrdersPage } from '../pages/viewOrdersPage';

const sortOrders = (e, arr) => {
  if (e.target.id.includes('orderStatusSort')) {
    const openToClosed = arr.sort((a, b) => b.is_open - a.is_open);
    viewOrdersPage(openToClosed);
  }
};

export default sortOrders;
