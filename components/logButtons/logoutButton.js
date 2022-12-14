import { signOut } from '../../utils/auth';

const logoutButton = () => {
  const domString = '<button id="googleSignout" class="btn btn-danger">Signout</button>';
  document.querySelector('#logout').innerHTML = (domString);
  document.querySelector('#googleSignout').addEventListener('click', signOut);
};

export default logoutButton;
