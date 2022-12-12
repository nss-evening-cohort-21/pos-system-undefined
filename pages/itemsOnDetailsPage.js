import renderToDOM from '../utils/renderToDOM';

const itemsOnDetailsPage = (itemArray) => {
  let domString = '';
  itemArray.forEach((item) => {
    domString += `<div class="card">
    
          <div class="card-body" style="height: 300px;">
            <h5 class="card-title">Item: ${item.name}</h5>
            <p>____________________________</p>
            <p>Price: ${item.price}</p>
          
            
            <i id="edit-Item-btn--${item.firebaseKey}" class="logout-btn fas  btn btn-info">Edit</i>

            
            <i id="delete-Item-btn--${item.firebaseKey}" class="logout-btn btn btn-danger fas"> Delete</i>
          </div>
    
        </div>`;
  });

  renderToDOM('#store', domString);
};

export default itemsOnDetailsPage;
