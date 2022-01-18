// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LargeCarousel from './components/LargeCarousel';
import { useState } from "react";

function App() {
  const [carouselImages1, setcarouselImages1] = useState([
    {
        "h3":"First slide label", 
        "p":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
        "link": "https://www.pcgamesn.com/wp-content/uploads/2020/08/doom-eternal-ancient-gods-part-2-dlc-release-date-2.jpg"
    },
    {
        "h3":"Second slide label", 
        "p":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "link": "https://www.gry-online.pl/i/h/1/598920703.jpg"
    },
    {
        "h3":"Second slide label", 
        "p":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "link": "https://cdn.mos.cms.futurecdn.net/iPKatp6VvEFwBwMeYXSwhR.jpg"
    },
  ]);

  const [carouselImages2, setcarouselImages2] = useState([
    {
        "h3":"First slide label", 
        "p":"Nulla vitae elit libero, a pharetra augue mollis interdum.",
        "link": "https://cdn.vox-cdn.com/thumbor/NVxK5PkR95tMXoOZRqKwSwMq_XA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19197653/doom_2016_key_art.jpeg"
    },
    {
        "h3":"Second slide label", 
        "p":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "link": "https://i2.wp.com/manualdosgames.com/wp-content/uploads/2020/10/DOOM_Eternal_The_Ancient_Gods.jpg"
    },
    {
        "h3":"Second slide label", 
        "p":"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "link": "https://images.ctfassets.net/rporu91m20dc/4ZuzbjLWLRSbB9jBNmn2Gp/db8a11f9b8dcf330256726546c55869d/Doom-Eternal_Slayer_Army_Wallpaper_1920x1080-01.jpg"
    },
]);


  return (
    <div className="App" id="THISDIV">
      <Header/>
      <div className="paddingTop"/>
      <LargeCarousel carouselData={carouselImages1}/>
      <p className="text-white home-text pageTxt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <LargeCarousel carouselData={carouselImages2}/>
      <p className="text-white home-text pageTxt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  );
}

export default App;

