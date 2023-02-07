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

/*
function Logements(){
     const [isDataLoading, setDataLoading] = useState(false)
     const [error, setError] = useState(false)
     const [freelancersList, setLogementsList] = useState([])

     useEffect(() => {
          async function fetchLogements() {
            setDataLoading(true)
            try {
               const response = await get('../assets/logements')
              //const response = await fetch(`http://localhost:8000/freelances`)
              const { logementsList } = await response.json()
              setLogementsList(logementsList)
            } catch (err) {
              console.log('===== error =====', err)
              setError(true)
            } finally {
              setDataLoading(false)
            }
          }
          fetchLogements()
        }, [])


     function Home() {
          return (
               <div>
                    <h1>Chez vous, partout et ailleurs</h1>   
                    <div>
                    {logements.map((profile, index) => (
             <Card
               key={`${profile.name}-${index}`}          
               title={profile.name}
               picture={profile.picture}
             />
           ))}
                    </div>       
               </div>
          )
        }
}
*/

/*
const params = useParams();
     console.log("url param id : "+ params.id)

     const [isDataLoading, setDataLoading] = useState(false)
     const [error, setError] = useState(false)
     const [setInfoLogement] = useState([])

     useEffect(() => {
          async function getLogement() {
            setDataLoading(true)
            try {
               const response = async () => {
                    for (var i=0; i<Logements.length; i++)
                    if(Logements[i].id === params.id){
                         console.log("element into the f : "+ Logements[i])
                         return Logements[i]
                    }
               }
              //const response = await fetch(`http://localhost:8000/freelances`)
              const { infoLogement } = await response.json()
              setInfoLogement(infoLogement)
            } catch (err) {
              console.log('===== error =====', err)
              setError(true)
            } finally {
              setDataLoading(false)
            }
          }
          getLogement()
        }, [])
*/

/*
     const response = async () => {
          for (var i=0; i<Logements.length; i++)
          if(Logements[i].id === params.id){
               console.log("element into the f : "+ Logements[i])
               return Logements[i]
          }}
          console.log(response.json)
          */
/* const [searchTerm] = useState('')
     
     Logements.filter((val)=>{
          if(searchTerm === params.id){
               return val;
          } else {
          console.log("error");
          return "error";
     }}) */

/*
     Logements.forEach(element => {
          if (element.id === params.id) {
               console.log(element)
          }
     });
    */
/*
   var source=[1,2,3,4,5];

var destination=source.map(function(item){
 if(item==3)
     return 'OUTPUT';
}).filter(function(item){return item;})[0];
   */
