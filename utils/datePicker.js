import { getAllRevenue } from '../api/revenueData';
import renderToDOM from './renderToDOM';

// click event for rendering revenue for specific date ranges

const datePick = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('dateButton')) {
      console.warn('CLICKED the submit date range button', e.target.id);
      const startDate = document.querySelector('#startDate').value;
      // javascript is in milliseconds, so seconds per day x 1000
      const startDateTimeStamp = new Date(startDate).getTime();
      const endDate = document.querySelector('#endDate').value;
      const endDateTimeStamp = new Date(endDate).getTime();
      console.warn('startDate', startDate);
      console.warn('startDateTimeStamp', startDateTimeStamp);
      console.warn('endDate', endDate);
      console.warn('endDateTimeStamp', endDateTimeStamp);

      const revenueWithinDateRange = (revenue) => {
        let totalOrder = 0;
        revenue.map((rev) => {
          console.warn('revenue', revenue);
          const orderdate = rev.date;
          console.warn('orderdate', orderdate);
          if (new Date(orderdate).getTime() >= startDateTimeStamp && new Date(orderdate).getTime() <= (endDateTimeStamp + 864000000)) {
            totalOrder += rev.order_amt;
          }
          renderToDOM('#revDateRangeTotal', totalOrder.toFixed(2));
          console.warn('totalOrder 2', totalOrder);
          return totalOrder;
        });
      };
      getAllRevenue().then((revenue) => revenueWithinDateRange(revenue));
    }
  });
};

export default datePick;
