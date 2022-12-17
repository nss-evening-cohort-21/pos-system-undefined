import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logButtons/logoutButton';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import homePage from '../pages/homePage';
import datePick from './datePicker';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  navBar();
  homePage(user);
  logoutButton();
  datePick();
  navigationEvents(user);
};
export default startApp;
