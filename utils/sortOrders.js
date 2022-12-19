import { viewOrdersPage } from '../pages/viewOrdersPage';

const sortOrders = (arr) => {
  const openToClosed = arr.sort((a, b) => b.is_open - a.is_open);
  viewOrdersPage(openToClosed);
};

export default sortOrders;
