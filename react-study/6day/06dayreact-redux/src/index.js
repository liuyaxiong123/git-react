import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '@/store/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

//整个应用唯一的store对象.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk,createLogger())));


ReactDOM.render(
  //Provider将store对象应用到App下的所有组件内
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
serviceWorker.unregister();
