import searchOrderEvent from '../events/searchOrderEvent';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrdersPage = (array) => {
  clearDom();
  const searchBarString = ` <form class="form-inline my-2 my-lg-0">
  <input  id="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
</form>`;

  let domString = '';
  array.forEach((item) => {
    domString += `<div class="card">
    
          <div class="card-body" style="height: 350px;">
            <h5 class="card-title">Order: ${item.order_name}</h5>
            <p>____________________________</p>
           <div class="definition"> <p>Phone Number: ${item.phone_number}</p></div>
            <p>email: ${item.email}</p>
          <p>${item.date}</p>
          <p>${item.is_phone === true ? 'Phone Order' : 'In Person'}</p>
          <p>${item.is_open === true ? 'order open' : 'order closed'}</p>
            
            ${item.is_open === true ? `<i id="edit-Order-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info">Edit</i>` : ''}
            ${item.is_open === true ? `<i id="details-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-success fas">View Details</i>` : ''}
            ${item.is_open === true ? `<i id="delete-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas">Delete</i>` : ''}

    
        </div>`;
  });
  renderToDOM('#form-container', searchBarString);
  renderToDOM('#store', domString);
  searchOrderEvent();
};
// eslint-disable-next-line import/prefer-default-export
export { viewOrdersPage };
