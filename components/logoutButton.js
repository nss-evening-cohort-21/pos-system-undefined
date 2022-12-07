const logoutButton = () => {
  const domString = '<button id="google" class="btn btn-danger">SIGNOUT</button>';
  document.querySelector('#logout').innerHTML = (domString);
};

export default logoutButton;
