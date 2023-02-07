import { React, useEffect, useState } from 'react';

import Banner from '../components/Banner';
import BackgroundIMG from '../assets/BackgroundIMG_1.png';
import Card from '../components/Card';

import Logements from '../assets/logements';

import '../styles/Home.css';
import '../styles/Body-page.css';

function Home() {
  const [isDataLoading, setDataLoading] = useState(false);
  const [hasDataAlreadyLoad, setAlreadyLoad] = useState(false);
  const [error, setError] = useState(false);
  const [infoLogements, setInfoLogements] = useState([]);

  useEffect(() => {
    setDataLoading(true);
    async function fetchLogements() {
      try {
          //for backend fetch
        /* const response = await fetch('../asstes/logements');
        const { infoLogementsData } = await response.json(); */

        setInfoLogements(Logements);
      } catch (err) {
        console.log('===== error =====', err);
        setError(true);
      } finally {
        setDataLoading(false);
        setAlreadyLoad(true);
      }
    }
    fetchLogements();
  }, []);
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
  if (!isDataLoading && hasDataAlreadyLoad) {
    return (
      <div className="mainWrapper">
        <div className="mainContainer">
          <div className="home-bannerWrapper">
            <Banner cover={BackgroundIMG} title={'Chez vous, partout et ailleurs'} />
          </div>
          <div className="gallery-grid-container">
            {infoLogements.map((profile) => (
              <Card key={profile.id} title={profile.title} cover={profile.cover} id={profile.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;

