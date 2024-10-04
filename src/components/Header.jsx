import React from 'react'

const Header = () => {
  return (
    <header className='header-container'>
        <div className='header-content'>
            <h2 className='title'>
                <a href='/'>India</a>
            </h2>
            <p className="theme-changer">
          <i className={'fa-solid fa-sun'}></i>&nbsp;&nbsp; Mode
        </p>
        </div>
    </header>
  )
}

export default Header