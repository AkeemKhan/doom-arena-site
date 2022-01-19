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
    <div className="App">
      <Header/>
      <div className="paddingTop">
      </div>
        <h3 className="text-white home-header-top">Are you skilled enough to face the dreaded arenas?...</h3>
        <p className="text-white home-intro font-text">Test your mettle in the Arena style horde maps made for GZDoom, compatible with various gameplay mods...</p>
        
        <div className="carousel-div">
            <LargeCarousel className="large-carousel" carouselData={carouselImages1}/>
        </div>

        <h3 className="text-white home-header-top">Fight the hordes of randomly spawning enemies</h3>
        <p className="text-white home-intro font-text">Enemies spawn everywhere. Leave it for too long and you will be overwhelmed...</p>
        
        <div className="carousel-div">
            <LargeCarousel className="large-carousel" carouselData={carouselImages2}/>
        </div>
        
        <h3 className="text-white home-header-top">Choose your difficulty tier</h3>
        <p className="text-white home-intro font-text">The harder the tier, the greater the satisfaction...</p>
        
    </div>
  );
}

export default App;

