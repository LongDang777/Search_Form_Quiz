import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../asset/images/LD.jpg'
import { sidebarData } from '../../utils/constans'
import './style.css'

export default function Sidebar() {

  const SidebarItem = props => {

    const { active, icon, title } = props;

    const activeItem = active ? 'active' : ''
    return (
      <div className='sidebar__item'>
        <div className={`sidebar__item-inner ${activeItem}`}>
          <i className={icon}></i>
          <span>{title}</span>
        </div>
      </div>
    )
  }

  const path = useLocation();

  const activeItem = sidebarData.findIndex(item => item.route === path.pathname)

  return (
    <div className='sidebar'>
      <div className="sidebar__logo">
        <img src={logo} alt="Long Dang" />
        <h2>Week 6</h2>
      </div>
      {sidebarData.map((item, index) => {
        const { route, display_name, icon } = item;
        return (
          <Link to={route} key={index}>
            <SidebarItem
              title={display_name}
              icon={icon}
              active={index === activeItem}
            />
          </Link>)
      })}
    </div>
  )
}
