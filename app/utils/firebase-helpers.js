import { fb } from 'utils/firebase-config';
import firebase from 'firebase';

export function isUserEqual(facebookAuthResponse, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
          providerData[i].uid === facebookAuthResponse.userID) {
        // We don't need to re-auth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}

export function checkLoginState(authResponse, cb) {
  if (authResponse) {
    // User is signed-in Facebook.
    let unsubscribe = fb.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(authResponse, firebaseUser)) {
        // Build Firebase credential with the Facebook auth token.
        let credential = firebase.auth.FacebookAuthProvider.credential(
            authResponse.accessToken);
        // Sign in with the credential from the Facebook user.
        fb.auth().signInWithCredential(credential)
          .then((resp) => {
            return cb()
          })
          .catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          // The email of the user's account used.
          let email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          let credential = error.credential;
          // ...
        });
      } else {
        console.log('Already Logged Into Firebase')
        return cb()
        // User is already signed-in Firebase with the correct user.
      }
    });
  } else {
    // User is signed-out of Facebook.
    db.auth().signOut();
  }
}
