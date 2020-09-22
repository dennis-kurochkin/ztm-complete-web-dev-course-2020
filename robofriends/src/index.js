import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers/index';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
