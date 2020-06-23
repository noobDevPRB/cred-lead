import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Pages/Main';
import Policy from './components/Pages/Policy';
import Company from './components/Pages/Company';

export default function Routes() {

    return (
        
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/policy" component={Policy}/>
            <Route path="/company/:id" component={Company}/>
        </Switch>
       
    );
}
