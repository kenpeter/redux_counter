// we need react
import React from 'react';
// render some tags
import { render } from 'react-dom';
// provider allows children of component can access this.context.
import { Provider } from 'react-redux';

/*
// You can see router, connects to history, state, and it is in store.
const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

*/
import { ConnectedRouter } from 'react-router-redux';

// history is from createHistory locally.
// store is from createStore locally.
import store, { history } from './store';

// containers has app
import App from './containers/app';

// sanitize.css is npm package
import 'sanitize.css/sanitize.css';
// import index.css, local css. That is how we use css
import './index.css';

// document selector
// # root
// now assign to target
const target = document.querySelector('#root');

// now render html tag, render is from react-dom.
// provider allows sub child to accees context
// store contains rootReducer, initState, middleWare
// conenct_router (store, history, states)
// we have app
// <div id="root"></div>
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
