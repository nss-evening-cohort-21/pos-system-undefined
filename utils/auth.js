import firebase from 'firebase/app';
import 'firebase/auth';
import clearNavigation from './clear/clearNavigation';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  clearNavigation();
  firebase.auth().signOut();
};

export { signIn, signOut };
