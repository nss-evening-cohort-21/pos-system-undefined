import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import homePage from '../pages/homePage';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  navBar();
  homePage(user);
  navigationEvents(user);
};
export default startApp;
