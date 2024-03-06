import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Cart from './Components/Cart/Cart'
import Guide from './Components/Guide/Guide';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/aboutme' component={About} />
        <Route path='/cart' component={Cart} />
        <Route path='/guide' component={Guide} />
    </Switch>
)