import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import navPage from '../pages/navPage';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  navPage(user);
  navigationEvents(user);
};
export default startApp;
