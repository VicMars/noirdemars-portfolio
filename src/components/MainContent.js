import React from 'react';


function MainContent() {

  return(
    <main id="content-container">
      <div className="content">

        <div className="content-portrait">
          <div className="content-portrait-text left">
             <h2><a href="#container-textile">textile</a></h2>
          </div>
          <div className="content-portrait-photo">
            <img src="./assets/images/Vicky_Andre.jpg" alt="Vicky André"/>
          </div>
          <div className="content-portrait-text right">
             <h2><a href="#container-web">web</a></h2>
          </div>
        </div>

        <div className="content-main-title">
          <h1>Vicky André</h1>
          <div className="content-introduction">
          <h1>
          <span className="content-introduction-title three">Je suis</span>
          <span className="content-introduction-title two">une âme </span>
          <span className="content-introduction-title one">créative</span>
          </h1>
        </div>
        </div>

      </div>
    </main>

    )
}


export default MainContent
