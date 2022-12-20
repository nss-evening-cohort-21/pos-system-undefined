import searchOrderEvent from '../events/searchOrderEvent';
import clearDom from '../utils/clear/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrdersPage = (array) => {
  clearDom();
  const searchBarString = ` <form class="form-inline my-2 my-lg-0">
   <input  id="search" class="form-control mr-sm-2" type="search" placeholder="Search by Name, Phone, Email, or Date" aria-label="Search">
   </form>
   <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    View Orders By:
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" id="allOrders">All Orders</a></li>
    <li><a class="dropdown-item" id="openOrders">Open Orders</a></li>
    <li><a class="dropdown-item" id="closedOrders">Closed Orders</a></li>
  </ul>
</div>`;

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
            
            ${item.is_open === true ? `<i id="edit-Order-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info"><i class="fas fa-edit"></i> Edit</i>` : ''}
            
            <i id="details-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-success fas"><i class="fas fa-eye"></i> View Details</i>

            ${item.is_open === true ? `<i id="delete-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"><i class="fas fa-trash-alt"></i> Delete</i>` : ''}

    
        </div>`;
  });
  renderToDOM('#form-container', searchBarString);
  renderToDOM('#store', domString);
  searchOrderEvent();
};
// eslint-disable-next-line import/prefer-default-export
export { viewOrdersPage };
