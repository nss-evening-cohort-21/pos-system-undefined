import firebase from 'firebase/app';
import 'firebase/auth';
import domBuilder from '../components/shared/domBuilder';
import openingPage from '../pages/openingPage';
import clearNavigation from './clearNavigation';
import client from './client';
import startApp from './startApp';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      domBuilder();
      openingPage();
      clearNavigation();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
