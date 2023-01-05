import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import './LayoutTemplate/LayoutTempalte.css';
import AlbumFeature from './pages/feature/Album';
import Todo from './pages/feature/Todo';
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
            <Redirect from="/Search_Form_Quiz" to="/Search_Form_Quiz/country" exact />
            <Route exact path="Search_Form_Quiz/country" component={Search} />
            <Route exact path="Search_Form_Quiz/form" component={Form} />
            <Route exact path="Search_Form_Quiz/quiz" component={Quiz} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

