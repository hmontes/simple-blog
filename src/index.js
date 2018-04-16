import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import 'bulma/css/bulma.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
  apiKey: "AIzaSyAE1roC2cN0Q-F7i3t_Qa2m_EMacZjNaBE",
  authDomain: "blog-7534d.firebaseapp.com",
  databaseURL: "https://blog-7534d.firebaseio.com",
  projectId: "blog-7534d",
  storageBucket: "blog-7534d.appspot.com",
  messagingSenderId: "689220480828"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
