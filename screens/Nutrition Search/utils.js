import firebase from '../../configs/firebase';

export const posting = async (calories,names) => {
  await firebase.firestore()
    .collection('users').doc(firebase.auth().currentUser.uid)
      .set({
        calories: calories,
        names: names
      });
}

export const displaying = () => {
  return new Promise((resolve) => {
    firebase.firestore().collection('users').get().then((query) => {
      query.forEach((doc) => {
        const user = firebase.auth().currentUser.uid;
        if (user == doc.id) {
          resolve(doc.data());
          return;
        }
      })
    })
  });
}