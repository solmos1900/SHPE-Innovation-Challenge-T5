import firebase from '../../configs/firebase';

const logining = (prop) => {
  console.log(typeof(prop.email));
  firebase.auth().signInWithEmailAndPassword(prop.email, prop.password)
    .then(() => {
      if (firebase.auth().currentUser.emailVerified) {
        alert(prop.email + ' has been verified');
      }
      else {
        alert(prop.email + ' has not been verified');
      }
    })
    .catch(function(error) {
        alert(error.message);
    });
}

export default logining;