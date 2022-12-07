import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  console.warn(user);

  document.querySelector('#google').addEventListener('click', () => {
    console.warn('I am pushing hte logout');
    signOut();
  });
};
export default navigationEvents;
