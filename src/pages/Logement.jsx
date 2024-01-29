import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/Body-page.css';
import '../styles/Logement.css';

import NoMatch from '../pages/Error';

import Logements from '../assets/logements.json';
import Slideshow from '../components/Slideshow';
import Tagshow from '../components/Tagshow';
import Rating from '../components/Rating';
import Host from '../components/Host';
import Collapsible from '../components/Collapsible';

function Logement() {
  const params = useParams();

  const [isDataLoading, setDataLoading] = useState(false);
  const [hasDataAlreadyLoad, setAlreadyLoad] = useState(false);
  const [error, setError] = useState(false);
  const [infoLogement, setInfoLogement] = useState([]);

  useEffect(() => {
    setDataLoading(true);
    async function getLogement() {
      try {
        const infoLogementData = Logements.map((element) => {
          if (element.id === params.id) {
            return element;
          }
        }).filter(function (element) {
          return element;
        });
        setInfoLogement(infoLogementData[0]);
      } catch (err) {
        console.log('===== error =====', err);
        setError(true);
      } finally {
        setDataLoading(false);
        setAlreadyLoad(true);
      }
    }
    getLogement();
  }, []);
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
  if (!isDataLoading && hasDataAlreadyLoad) {
    if (infoLogement === undefined) {
      return <NoMatch />;
    } else {
      return (
        <div className="mainWrapper">
          <div className="mainContainer">
            <div className="logementInfo-section">
              <Slideshow pictures={infoLogement.pictures} />
              <div className="logement-info-wrapper">
                <div className="logement-introinfo">
                  <div className="">
                    <h1 className="logement-title">{infoLogement.title}</h1>
                    <p className="logement-location">{infoLogement.location}</p>
                  </div>
                  <div className="tags-container">
                    {infoLogement.tags.map((tags, index) => (
                      <Tagshow tags={tags} key={index} />
                    ))}
                  </div>
                </div>
                <div className="host-rating">
                  <Host name={infoLogement.host.name} picture={infoLogement.host.picture} />
                  <div className="rating-container">
                    <Rating rating={infoLogement.rating} />
                  </div>
                </div>
              </div>
              <div className="logement-collapsible-container">
                <Collapsible label="Description">
                  <p className="logement-collapsible-p">{infoLogement.description}</p>
                </Collapsible>
                <div className="collapssible-separator"></div>
                <Collapsible label="Equipements">
                  {infoLogement.equipments.map((element, index) => (
                    <p className="logement-collapsible-p" key={index}>
                      {element}
                    </p>
                  ))}
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else if (isDataLoading && !hasDataAlreadyLoad) {
    return (
      <div className="mainWrapper">
        <div className="mainContainer">
          <p>Oups, il s'emblerai qu'il y ai une erreur</p>
        </div>
      </div>
    );
  }
}

export default Logement;
