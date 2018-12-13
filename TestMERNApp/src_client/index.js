import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';
import './assets/style/index.css';
import './assets/style/style.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import indexRoutes from "./routes/index";

import {Provider} from 'react-redux';
import store from './redux';

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

