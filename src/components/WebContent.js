import React from 'react'
import ProjectCard from './ProjectCard'


function WebContent() {

  return(

    <div id="content-web">
      <h2 className="content-title"> Design & développement Web </h2>

      <div className="content-web">
        <div className="content-web-inside">
          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_LaboratoireTextile.png"
            imgAlt="Vicky André - Laboratoire Textile"
            name="Laboratoire Textile"
            title="Une boutique en ligne minimaliste imaginée pour mettre en valeur
            ces magnifiques lampes fabriquées à la main à Montréal."
            description="Design épuré et moderne, larges images, boutique en ligne aérée."
            tool1=" • Design et prototype Figma"
            tool2=" • Thème Wordpress crée sur mesure"
            tool3=" • Woocommerce"
            tool4=" • css, html, php, javascript"
            projectLink="https://laboratoiretextile.ca"
            projectLinkTitle="laboratoiretextile.ca"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_Cocqsida.png"
            imgAlt="Vicky André - Cocq Sida"
            name="Cocq Sida"
            title="Project en cours: un site web informatif pour l'organisation canadienne de la lutte contre le Sida"
            description="Design aéré pour faciliter la lecture et la recherche d'informations"
            tool1=" • Design et prototype Figma"
            tool2=" • Réorganisation de l'arborescence"
            tool3=" • Développement thème Wordpress"
            tool4=" • css, html, php, javascript"
            projectLink=""
            projectLinkTitle="Cocq Sida"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_sparck.png"
            imgAlt="Vicky André - spärck"
            name="spärck"
            title="Un site web pour une agence web innovante"
            description="Focus sur une mise en page graphique et colorée"
            tool1=" • Branding: création du logo et charte graphique "
            tool2=" • Design et prototype Figma "
            tool3=" • css intégration"
            tool4=""
            projectLink="https://sparck.ca"
            projectLinkTitle="sparck.ca"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_ctstudio.png"
            imgAlt="Vicky André - ct•studio"
            name="ct•studio"
            title="Une plateforme dédiée à la vente de motifs digitaux pour la mode et la décoration."
            description="Simplicité et minimalisme pour mettre en valeur les designs proposés à la vente"
            tool1=" • Développement thème Wordpress selon le design choisi "
            tool2=" • Woocommerce "
            tool3=" • css, html, php, javascript"
            tool4=""
            projectLink="https://ctstudio.ca"
            projectLinkTitle="ctstudio.ca"
          />

          <ProjectCard
            imgUrl="./assets/images/Vicky_Andre_collectiftextile.png"
            imgAlt="Vicky André - Collectif Textile"
            name="Collectif Textile"
            title="Un blog international dédié au Design textile, à l'Art Contemporain et plus encore..."
            description="Un projet toujours en évolution avec un nouveau design annuel"
            tool1=" • Développement thème Wordpress "
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
