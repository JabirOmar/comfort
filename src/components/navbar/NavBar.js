import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { IoIosMoon } from 'react-icons/io'
import './navbar.css'

function NavBar() {

  const shake = () => {
    const shakeLogo = document.getElementById('logo')
      shakeLogo.classList.add('shake_horizontal')
    setTimeout(function() {
      alert('hfepk')
    },1000)
  }

  const themeChanger = () => {
    const indicate = document.getElementById('indicator')
    const body = document.querySelector('body')
    indicate.classList.toggle('bright')
    body.classList.toggle('bright')
  }

  const menu = () => {
    const menuBox = document.getElementById('menu_box')
    const navLink = document.querySelector('.nav_links')
    menuBox.classList.toggle('clicked')
    navLink.classList.toggle('show')

    const links = document.getElementsByClassName('links')
    const home = document.querySelector('.home_window')

    links[0].addEventListener('click', () => {
      home.scrollIntoView()
    })

  }

  return (
    <nav>

      <div className='left_nav'>
        <span id='logo' onClick={shake}>Comfort</span>
      </div>

      <div className='right_nav'>
        <div className='nav_links'>
          <ul>
            <li className='links' id='home'>Home</li>
            <li className='links' id='explore'>Explore</li>
            <li className='links' id='book'>Book</li>
            <li className='links' id='contact'>Contact</li>
          </ul>
        </div>

        <div className='theme_container' onClick={themeChanger}>
          <BsFillSunFill id='sun'/>
          <i id='indicator'></i>
          <IoIosMoon id='moon'/>
        </div>

        <div id='menu_box' onClick={menu}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>

    </nav>
  )
}

export default NavBar