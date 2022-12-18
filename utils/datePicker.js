// click event for rendering revenue for specific date ranges

const datePick = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('dateButton')) {
      console.warn('CLICKED the submit date range button', e.target.id);
      const startDate = document.querySelector('#startDate').value;
      const editStartDate = new Date(startDate).toLocaleDateString();
      const endDate = document.querySelector('#endDate').value;
      console.warn('startDate', startDate);
      console.warn('editStartDate', editStartDate);
      console.warn('endDate', endDate);
    }
  });
};

export default datePick;
