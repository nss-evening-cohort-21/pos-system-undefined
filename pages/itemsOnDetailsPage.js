import renderToDOM from '../utils/renderToDOM';

const itemsOnDetailsPage = (order, itemArray) => {
  let domString = '';
  itemArray.forEach((item) => {
    domString += `<div class="card">
    
          <div class="card-body" style="height: 300px;">
            <h5 class="card-title">Item: ${item.name}</h5>
            <p>____________________________</p>
            <p>Price:$ ${item.price}</p>
          
            ${order.is_open === true ? `
            <i id="edit-Item-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info"><i class="fas fa-edit"></i> Edit</i>
            <i id="delete-Item-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"><i class="fas fa-trash-alt"></i> Delete</i>` : ''}

          </div>
    
        </div>`;
  });

  renderToDOM('#view', domString);
};

export default itemsOnDetailsPage;
