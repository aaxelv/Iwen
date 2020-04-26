import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Photo from './components/Photo';

import './style/main.less';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={Home}
            />
            <Route path="/photo" component={Photo} />
        </Switch>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
