import firebase from firebase;
import { POST_CREATE } from './types';

const db = firebase.firestore();

export const postCreate = ({ title, category, content }) => {

  return dispatch => {
    db.collection('posts').add({
      title,
      category,
      content
    }).then(docRef => {
      console.log(docRef)
    }).catch(err => console.log(err))
  }
}