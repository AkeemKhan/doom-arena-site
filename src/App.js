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
        "h3":"Fight within arenas", 
        "p":"Face hordes of familiar faces",
        "link": "/images/arenagate.png"
    },
    {
        "h3":"Explore secrets within the stages", 
        "p":"Hidden paths, subtle entrances",
        "link": "/images/abandoneduacoutposts.png"
    },
    {
        "h3":"Every run, different", 
        "p":"Randomly spawning enemy hordes, you never know when and where they will appear.",
        "link": "/images/houseofpain.png"
    },
  ]);

  const [carouselImages2, setcarouselImages2] = useState([
    {
        "h3":"Complete Objectives", 
        "p":"Objectives reduces the number of waves",
        "link": "/images/objective.png"
    },
    {
        "h3":"Hunt down the key spawn locations", 
        "p":"You can only escape once you survive long enough",
        "link": "/images/keyspawn.png"
    },
    {
        "h3":"Face challenge rooms", 
        "p":"They are there to test your mettle, with a bountiful reward.",
        "link": "/images/arenas.png"
    },
]);


  return (
    <div className="App" id="THISDIV">
      <Header/>
      <div className="paddingTop">
      </div>
        <h3 className="home-red-text">Are you skilled enough to face the dreaded arenas?...</h3>
        <div className="carousel-div">
            <LargeCarousel className="large-carousel" carouselData={carouselImages1}/>
        </div>
        <p className="text-white home-text pageTxt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="carousel-div">
            <LargeCarousel className="large-carousel" carouselData={carouselImages2}/>
        </div>
        <p className="text-white home-text pageTxt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  );
}

export default App;

