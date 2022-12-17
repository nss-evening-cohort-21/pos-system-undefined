// click event for rendering revenue for specific date ranges

const datePick = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('dateButton')) {
      console.warn('CLICKED the submit date range button', e.target.id);
    }
  });
};

export default datePick;
