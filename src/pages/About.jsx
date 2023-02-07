import { React, useState, useEffect } from 'react';

import Banner from '../components/Banner';
import BackgroundIMG from '../assets/BackgroundIMG_2.png';
import BackgroundIMG_mobile from '../assets/BackgroundIMG_3.png';

import Collapsible from '../components/Collapsible';
import '../styles/Body-page.css';
import '../styles/About.css';

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  //choose the screen size
  useEffect(() => {
    function handleSize() {
      try {
        if (window.innerWidth < 720) {
          setIsMobile(true);
        }
      } catch (err) {
        console.log('===== error =====', err);
      }
    }
    handleSize();
  }, []);
  return (
    <div className="mainWrapper">
      <div className="mainContainer">
        <div className="about-bannerWrapper">
          {!isMobile && <Banner cover={BackgroundIMG} title={''} />}
          {isMobile && <Banner cover={BackgroundIMG_mobile} title={''} />}
        </div>
        <div className="section-collapsible">
          <Collapsible label="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
              conformes aux logements, et toutes les informations sont régulièrement vérifiées par
              nos équipes.
            </p>
          </Collapsible>

          <Collapsible label="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
              discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre
              plateforme.
            </p>
          </Collapsible>

          <Collapsible label="Service">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
              N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>
          </Collapsible>

          <Collapsible label="Responsabilité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
              chaque logement correspond aux critères de sécurité établis par nos services. En
              laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de
              vérifier que les standards sont bien respectés. Nous organisons également des ateliers
              sur la sécurité domestique pour nos hôtes.
            </p>
          </Collapsible>
        </div>
      </div>
    </div>
  );
}

export default Home;
