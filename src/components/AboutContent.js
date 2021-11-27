import React from 'react';
import AboutShowContent from './AboutShowContent';


function AboutContent() {

  return(

    <div id="content-about">

      <div className="content-about-animation">
        <div className="main-content">
          <h1>
          <svg viewBox="0 0 360 140">
          <text x="50%" y="100%" textAnchor="middle" fill="none">
            <tspan x="50%" y="45">Du design textile</tspan>
            <tspan x="50%" y="75">au design web,</tspan>
            <tspan x="50%" y="105"> je revisite les formes </tspan>
            <tspan x="50%" y="135">avec facétie</tspan>
          </text>
          </svg>
          </h1>
        </div>
        <div className="scroll-element">
          <p>scroll</p><p className="scroll-line">⎯</p>
        </div>

        <div className="scroll-plus">
          <AboutShowContent />
        </div>
      </div>

      <div className="content-about desktop">

        <div className="main-content">
          <p>
            Je suis une designer Française vivant à Montréal, au Canada.<br/>
            Après avoir étudié puis enseigné les Arts Plastiques à Paris, j'ai
            ressenti le besoin de mettre mon esprit créatif au service d'applications
            plus concrètes. Fascinée par l'Art Contemporain et intriguée par le pouvoir
            de la mode, c'est naturellement que je me suis formée aux métiers de la
            maroquinerie et du design textile.
            Appréciant les belles matières et le savoir-faire artisanal, j'ai co-fondé
            <a href="http://ctstudio.ca" target="_blank" rel="noreferrer"> ct•studio</a>,
            un bureau de création d'imprimés destinés à la mode; et le blog
            <a href="http://collectiftextile.com" target="_blank" rel="noreferrer"> Collectif Textile </a>
            pour inspirer et faire connaître les talents de ce secteur.
          </p>
          <br/>
          <p><img src="./assets/images/Vicky_Andre_skills-adobe.png" alt="Vicky André - Adobe skills" /></p>
          <br/>
        </div>
        <div className="scroll-element">
          <p>scroll</p><p className="scroll-line">⎯</p>
        </div>

      </div>


      <div className="content-about desktop">
        <div className="main-content">
          <p>
            En 2020, toujours désireuse d'acquérir de nouvelles compétences, j'ai entrepris un
            bootcamp pour apprendre à coder où j'ai cultivé un intérêt spécifique pour le développement front-end.<br/>
            Enrichissant ainsi de nouvelles facettes de mes compétences en design,
            j'imagine et crée maintenant des sites Web pour les designers,
            entrepreneurs et organisations, qui cherchent à se différencier sur le web.
            Avec la simplicité toujours à l'esprit, j'applique
            au Web l'approche pratique et fonctionnelle de l'artisanat.
          </p>
          <br/>
          <p><img src="./assets/images/Vicky_Andre_skills-front-end.png" alt="Vicky André - Front-end skills" />
             <br/>
             <img src="./assets/images/Vicky_Andre_skills-front-end2.png" alt="Vicky André - Front-end skills" /></p>
          <br/>
        </div>
        <div className="scroll-element">
          <p></p><p className="scroll-line"></p>
        </div>
      </div>

    </div>

    )
}


export default AboutContent
