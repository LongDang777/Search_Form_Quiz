import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Sidebar from '../component/Sidebar'
import './LayoutTempalte.css'

export default function LayoutTemplate(props) {

  return (
    <Route exact path={props.path} render={route => {
      return (
        <Fragment>
          <div className='layout'>
            <Sidebar {...props} />
            <div className="layout__content">
              <div className="layout__main">
                  <props.component {...route} />
              </div>
            </div>
          </div>
        </Fragment>
      )
    }} />
  )
}
