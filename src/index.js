import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//Basically, index.js just imports our components and server-side code
//.. and renders it to the DOM
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
