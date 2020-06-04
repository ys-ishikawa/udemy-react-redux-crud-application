import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EventIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducers";
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <EventIndex />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
