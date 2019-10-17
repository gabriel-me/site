import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Contact from './pages/Contact'
import Repositories from './pages/Repositories'
import Videos from './pages/Videos'

export default () => 
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/articles" component={Articles} />
      <Route path="/contact" component={Contact} />
      <Route path="/repositories" component={Repositories} />
      <Route path="/videos" component={Videos} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>