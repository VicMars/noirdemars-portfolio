import React from 'react'
import ProjectCard from './ProjectCard'


function WebContent() {

  return(

    <div id="content-web">
      <h2 className="content-title"> Design & Développement Web </h2>

      <div className="content-web">
        <div className="content-web-inside">

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_Cynthia_Immo.gif"
            imgAlt="Vicky André - Instagram Cynthia Immo"
            name="Design d'un Media Kit pour Instagram"
            client="Cynthia - Agent immobillière"
            title="Branding et proposition de contenu pour Instagram autour de la couleur bleue."
            description="Création d'une identité digitale professionnelle,
            pour proposer un contenu différentiel et engageant. Créer un sentiment de proximité et d'accessiblité"
            tool1=" • Design graphique et prototype"
            tool2=" • Adobe Illustrator & Photoshop"
            tool3=" • Transfert des maquettes sur 'Canva' pour faciliter l'utilisation par le client."
            tool4=""
            projectLink=""
            projectLinkTitle=""
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_LaboratoireTextile.png"
            imgAlt="Vicky André - Laboratoire Textile"
            name="Design et développement Web"
            client="Laboratoire Textile"
            title="Création d'une boutique en ligne minimaliste pour mettre en valeur
            les prodiuts maginifiques de l'artisane."
            description="Design épuré et moderne, larges images, boutique en ligne aérée."
            tool1=" • Design et prototypes Figma"
            tool2=" • Thème Wordpress créé et développé sur mesure"
            tool3=" • Woocommerce"
            tool4=" • css, html, php, javascript"
            projectLink="https://laboratoiretextile.ca"
            projectLinkTitle="laboratoiretextile.ca"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_Cocqsida.png"
            imgAlt="Vicky André - Cocq Sida"
            name="Design et développement Web"
            client="Cocq Sida"
            title="Project en cours: un site web informatif pour l'organisation canadienne de la lutte contre le Sida"
            description="Design aéré pour faciliter la recherche d'informations. Style professionnel mais engageant et humain."
            tool1=" • Design UI/UX et prototypes Figma"
            tool2=" • Réorganisation de l'arborescence"
            tool3=" • Développement thème Wordpress"
            tool4=" • css, html, php, javascript"
            projectLink=""
            projectLinkTitle="Cocq Sida"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_sparck.png"
            imgAlt="Vicky André - spärck"
            name="Design UI/UX"
            client="spärck"
            title="Un site web pour une agence innovante"
            description="Mise en page graphique et colorée pour exprimer le dynamisme et la créativité de l'agence."
            tool1=" • Branding: création du logo et charte graphique "
            tool2=" • Design et prototypes Figma "
            tool3=" • intégration css"
            tool4=""
            projectLink="https://sparck.ca"
            projectLinkTitle="sparck.ca"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_ctstudio.png"
            imgAlt="Vicky André - ct•studio"
            name="Développement Web"
            client="ct•studio"
            title="Crétation d'une plateforme dédiée à la vente de motifs digitaux pour la mode et la décoration."
            description="Simplicité et minimalisme pour mettre en valeur les designs proposés à la vente"
            tool1=" • Développement thème Wordpress selon le design choisi"
            tool2=" • Woocommerce "
            tool3=" • css, html, php, javascript"
            tool4=""
            projectLink="https://ctstudio.ca"
            projectLinkTitle="ctstudio.ca"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_collectiftextile.png"
            imgAlt="Vicky André - Collectif Textile"
            name="Développement Web"
            client="Collectif Textile"
            title="Un blog international dédié au Design textile, à l'Art Contemporain et plus encore..."
            description="Un design minimaliste qui change annuellement."
            tool1=" • Développement thème Wordpress selon le design choisi"
            tool2=" • css, html, php, javascript "
            tool3=""
            tool4=""
            projectLink="https://collectiftextile.com"
            projectLinkTitle="collectiftextile.com"
          />
          </div>
      </div>

      <div className="content-web-scroll">
        <div className="scroll-element">
          <p>scroll</p><p className="scroll-line">⎯</p>
        </div>
      </div>

    </div>

    )
}


export default WebContent
