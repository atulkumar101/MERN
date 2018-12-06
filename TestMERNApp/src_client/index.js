import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";

import {BrowserRouter, Route, Switch} from "react-router-dom";//HashRouter, Router,

import reducer from './redux/reducer';
import indexRoutes from "./routes/index";

const persistedState = localStorage.getItem('redux-store')?JSON.parse(localStorage.getItem('redux-store')):{};

const store = createStore(reducer,persistedState, applyMiddleware(thunk, logger)); 

//console.log('getState()',store.getState());

store.subscribe(() => {
  localStorage.setItem('redux-store', JSON.stringify(store.getState()));
})

//import {apiData} from './redux/action/product';
//store.dispatch(apiData()); 

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
            })}
            <Route render={()=><div>Not found</div>} />
          </Switch> 
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
);



//const initialState = window.__preloaded__;
//delete window.__preloaded__;
//const store= createStore(reducer,initialState);

//ReactDOM.hydrate
//auth={window.__preloaded__}

/*
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

<BrowserRouter></BrowserRouter>
<HashRouter></HashRouter>
<Router history={history}></Router>
*/

/*
export const Context = React.createContext({
  status: false,
  toggleStatus: () => {
    status ? console.log('true') : console.log('false') 
  }
});
<Context.Provider>
</Context.Provider>
*/

/*
import {firebaseApp} from './firebase';
firebaseApp.auth().onAuthStateChanged (
  user=>{
    if(user) {
      console.log('user');
      browserHistory.replace('/app');

    }
    else {
      console.log('!user');
      browserHistory.replace('/signin');
    }
  }
)
*/