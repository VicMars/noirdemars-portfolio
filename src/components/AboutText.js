import React from 'react';


function AboutText(props) {
  return(
    <div>
    <div className="content-about mobile">
      <div className="main-content">
        <p>
          Je suis une designer Française vivant entre Montréal et la Guadeloupe.<br/>
          Après avoir étudié puis enseigné les Arts Plastiques à Paris, j'ai
          ressenti le besoin de mettre mon âme créative au service d'applications
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
        <p>
          I am a French designer living between Montreal, Canada
          and Guadeloupe<br/>
          After studying and teaching Visual Arts in Paris, I felt
          the need to put my creative mind to more concrete applications.
          Fascinated by contemporary art and intrigued by the power of fashion,
          it is quite naturally that I trained in leather crafts and textile
          design.
          In love with beautiful materials and arts & crafts, I co-founded
          <a href="http://ctstudio.ca" target="_blank" rel="noreferrer"> ct•studio</a>,
          an agency that creates prints and patterns for fashion; and the blog
          <a href="http://collectiftextile.com" target="_blank" rel="noreferrer"> Collectif Textile </a>
          to inspire and share the talents of this field.
        </p>
      </div>
    </div>

    <div className="content-about mobile">
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
          <p>
            <img src="./assets/images/Vicky_Andre_skills-front-end.png" alt="Vicky André - Front-end skills"/>
            <br/>
            <img src="./assets/images/Vicky_Andre_skills-front-end2.png" alt="Vicky André - Front-end skills" />
          </p>
          <br/>
          <p>
            In 2020, always eager to acquire new skills, I completed a coding
            bootcamp and cultivated a specific incline toward front-end development.<br/>
            Extending new design facets, I now imagine and build websites for designers,
            independant entrepreneurs and organizations, who want a fresh and different
            feel for their websites. With simplicity and ease always in mind, I
            apply the pratical approach of Arts & Crafts to the web.
          </p>
        </div>
    </div>
    </div>
  )

}

export default AboutText
