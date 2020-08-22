import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/home'

export default () => 
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
