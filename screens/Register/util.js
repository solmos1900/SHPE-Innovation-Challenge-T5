import firebase from '../../configs/firebase';

const registering = (prop) => {
  firebase.auth().createUserWithEmailAndPassword(prop.email, prop.password)
    .then(() => {
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          alert('Just send a verify email to ' + prop.email);
          firebase.firestore()
            .collection('users').doc(firebase.auth().currentUser.uid)
                .set({  
                  first_name: prop.firstName,
                  last_name: prop.lastName,
                  email: prop.email
                }).catch((error) => {
                    alert(error.message);
                });
        });
    })
  .catch((error) => {
      alert(error.message);
  });
}

export default registering;