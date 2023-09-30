import React, { useContext, useEffect, useState } from 'react'
import "./header.css"
import logo from "../../../src/images/logo.png"
import { AppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'
import avatar from "../../../src/images/avartar.png"

export default function Header() {
  const {toggleMenubar, menuClick, mobile, setMobile} = useContext(AppContext)

  // useEffect(()=>{
  //   if(window.innerWidth <= 890){
  //     setMobile(true)
  //   }
  // }, [mobile])

  return (
    <header className='header'>
      <div className='logo__container'>

          <div className='menuIconContainer' onClick={toggleMenubar}>
          <i className={menuClick ? " fas fa-times menuIcon " : "fas fa-bars menuIcon "}></i>
          </div>

          <div className='logo__container2'>
          <img src={logo} alt="logo" className='logo' />
          <h2>Watch</h2>
          </div>

      </div>

     {mobile && <ul className='topnav__list__container'>
        <NavLink className="top__nav__links">
          <li className='top__list__item'>Movies</li>
        </NavLink>
        <NavLink className="top__nav__links">
          <li className='top__list__item'>Series</li>
        </NavLink>
        <NavLink className="top__nav__links">
          <li className='top__list__item'>Animations</li>
        </NavLink>
      </ul>}

      {
      <input 
      type="text" 
      placeholder='Search movie here...' 
      className='input' /> 
      }

     
      <img src={avatar} alt="avartar" className='avartar' />

    </header>
  )
}
