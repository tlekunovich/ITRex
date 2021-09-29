import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Reducers from './components/store/reducers';


const store = createStore(Reducers)

ReactDOM.render(
  <React.StrictMode >
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
