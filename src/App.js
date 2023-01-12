import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import './LayoutTemplate/LayoutTempalte.css';
import Form from './pages/Form';
import Quiz from './pages/Quiz';
import Search from './pages/Search';

export default function App() {
  return (
    <div className='layout'>
      <Sidebar />
      <div className="layout__content">
        <div className="layout__main">
          <Switch>
            <Route exact path="/form" component={Form} />
            <Route exact path="/quiz" component={Quiz} />
            <Route path="/" component={Search} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

