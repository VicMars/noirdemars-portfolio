import React from 'react'

function Navbar() {
  return (
    <div className="main-header">

      <div id="secondary-navigation" className="left">
        <p><a href="#main-content">V.</a></p>
      </div>

      <div id="main-navigation">
        <ul>
          <li><a href="#container-about">À propos</a></li>
          <li><a href="#container-web">Web</a></li>
          <li><a href="#container-textile">Textile</a></li>
          <li><a href="#container-contact">Contact</a></li>
        </ul>
      </div>

    </div>
    )
}

export default Navbar
