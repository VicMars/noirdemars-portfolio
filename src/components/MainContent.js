import React from 'react';


function MainContent() {

  return(
    <main id="content-container">
      <div className="content">

        <div className="content-portrait">
          <div className="content-portrait-text left">
             <h2>designer</h2>
          </div>
          <div className="content-portrait-photo">
            <img src="./assets/images/Vicky_Andre.jpg" alt="Vicky André"/>
          </div>
          <div className="content-portrait-text right">
             <h2><a href="#container-web">textile • web</a></h2>
          </div>
        </div>

        <div className="content-main-title">
          <h1>Vicky André</h1>
        </div>

      </div>
    </main>

    )
}


export default MainContent
