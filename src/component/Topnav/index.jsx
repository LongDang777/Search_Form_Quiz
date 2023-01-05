import React from 'react'
import './topnav.css'

export default function Topnav(props) {

  return (
    <div className='topnav'>
      <div className="topnav__search">
        <input onChange={(e) => e.target.value} type="text" placeholder='Search here...' />
        <i className='bx bx-search'></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <label for="cars">Select filter:</label>
          <select id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
    </div>
  )
}
