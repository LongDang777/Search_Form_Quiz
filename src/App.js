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
            <Route exact path="/country" component={Search} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/quiz" component={Quiz} />
            <Redirect from="home" to="/" exact />

            <Route path="/todos" component={Todo} />
            <Route path="/albums" component={AlbumFeature} />
          </Switch>
          {/* <Todo/> */}
        </div>
      </div>
    </div>
  )
}
