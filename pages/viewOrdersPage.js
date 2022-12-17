import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewOrdersPage = (array) => {
  clearDom();
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
            
            <i id="edit-Order-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info"><i class="fas fa-edit"></i> Edit</i>

            <i id="details-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-success fas"><i class="fas fa-eye"></i> View Details</i>
            
            <i id="delete-Order-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"><i class="fas fa-trash-alt"></i> Delete</i>
          </div>
    
        </div>`;
  });
  renderToDOM('#store', domString);
};
export default viewOrdersPage;
