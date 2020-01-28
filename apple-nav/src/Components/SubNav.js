import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Mac from './Mac';
import Ipad from './iPad';
import Iphone from './iPhone';
import Watch from './Watch';
import TV from './TV';
import Music from './Music';
import Support from './Support';
import AppleData from '../AppleData';

function SubNav() {
    const [items, setItems] = useState();
  useEffect(() => {
    setItems(AppleData);
  }, [])
//   console.log(items)
    
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/mac">
                    <Mac items={items}/>
                </Route>
                <Route exact path="/ipad">
                    <Ipad items={items}/>
                </Route>
                <Route exact path="/iphone">
                    <Iphone items={items}/>
                </Route>
                <Route exact path="/watch">
                    <Watch items={items}/>
                </Route>
                <Route exact path="/tv">
                    <TV items={items}/>
                </Route>
                <Route exact path="/music">
                    <Music items={items}/>
                </Route>
                <Route exact path="/support">
                    <Support items={items}/>
                </Route>
                
            </Switch>
        </div>
    )
}

export default SubNav;