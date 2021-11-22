import React from 'react';


function MainContent() {

  return(
    <main id="content-container">
      <div className="content">
      <div className="content-introduction">
        <h1>
        <span className="content-introduction-title three">Je suis</span>
        <span className="content-introduction-title two">une âme </span>
        <span className="content-introduction-title one">créative</span>
        </h1>
      </div>
      <div className="content-portrait">
        <div className="content-portrait-photo">
          <img src="./assets/images/Vicky_Andre.jpg" alt="Vicky André"/>
        </div>
      </div>
      </div>
    </main>

    )
}


export default MainContent
