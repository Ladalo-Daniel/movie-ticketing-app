import React, { useContext } from 'react'
import "./sidebar.css"
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const {menuClick} = useContext(AppContext)

  return (
    <div className="sidebar__wrapper">
    <div className={menuClick ? 'sidebar__close' : 'sidebar'}>

      <ul className="sidebar__list__container">
        <h1>Menu</h1>
        <NavLink to="/">
        <li className="sidebar__list__item">
          <i className='fas fa-home'></i>
          <p>Home</p>
        </li>
        </NavLink>
        <NavLink to="/categories">
        <li className="sidebar__list__item">
        <i className="fas fa-filter"></i>
        <p>Categories</p>
        </li>
        </NavLink>
        <NavLink to="/about">
        <li className="sidebar__list__item">
        <i className="fas fa-award"></i>
        <p>Awards</p>
        </li>
        </NavLink>
        <NavLink to="/about">
        <li className="sidebar__list__item">
        <i className="fas fa-heart"></i>
        <p>Descover</p>
        </li>
        </NavLink>
      </ul>

      <ul className="sidebar__list__container">
        <h1>User</h1>
        <NavLink to="/about">
        <li className="sidebar__list__item">
        <i className="fas fa-user"></i>
        <p>Account</p>
        </li>
        </NavLink>
        <NavLink to="/about">
        <li className="sidebar__list__item">
        <i className="fas fa-tv"></i>
        <p>Watch List</p>
        </li>
        </NavLink>
      </ul>

      <ul className="sidebar__list__container">
        <h1>General</h1>
        <NavLink to="/about">
        <li className="sidebar__list__item">
        <i className="fas fa-gear"></i>
        <p>Settings</p>
        </li>
        </NavLink>
        <li className="sidebar__list__item">
        <i className="fas fa-bolt"></i>
        <p>Logout</p>
        </li>
      </ul>

    </div>
    </div>
  )
}
