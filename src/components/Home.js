import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import LargeCarousel from './LargeCarousel';

const Home = () => {
    const [carouselImages1, setcarouselImages1] = useState([
        {
            "h3":"Run rampage within a variety of arenas", 
            "p":"From small to large, to colassal",
            "link": "/images/arenagate.png"
        },
        {
            "h3":"Explore secrets within the stages", 
            "p":"Find weapons and powerups to aid in surviving",
            "link": "/images/abandoneduacoutposts.png"
        },
        {
            "h3":"Replayable, Challenging", 
            "p":"Randomly spawning enemy hordes, you never know when and where they will appear.",
            "link": "/images/houseofpain.png"
        },
    ]);
    
    const [carouselImages2, setcarouselImages2] = useState([
        {
            "h3":"Complete Objectives", 
            "p":"Optional objectives makes your life easier",
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

    const [carouselImages3, setcarouselImages3] = useState([
        {
            "h3":"Gruellingly unforgiving", 
            "p":"Balance? You can die at any moment against insurmountable odds",
            "link": "/images/Cyberdemon.png"
        },
        {
            "h3":"Linear progression or pistol starts", 
            "p":"Designed for whatever style of play you prefer",
            "link": "/images/bossroom.png"
        },
        {
            "h3":"Patience or Aggression... you choose", 
            "p":"Do you choose to be overwhelmed? or do you decide on reckless bloodlust?",
            "link": "/images/lookoutside.png"
        },
    ]);

    const navigate = useNavigate();
    const handleClick = (route) =>  {
        console.log(route);
        var path = '/' + route;
        navigate(path)
    };

    return (       
        <>
            <div className="paddingTop"/>
            <img src="/images/doom-arena-logo-medium-transparent.png" className="responsive"/>
            <h3 className="text-white home-header-top">Are you skilled enough to face the dreaded arenas?...</h3>
            <p className="text-white home-intro font-text">Test your mettle in the Arena style horde maps made for GZDoom, compatible with various gameplay mods...</p>

            <div className="home-padding-bottom home-header-top">                
                <Button className="button-text" variant="danger" size="lg" onClick={() => handleClick("download")}>Download</Button>{' '}
            </div>

            <div className="carousel-div">
                <LargeCarousel className="large-carousel" carouselData={carouselImages1}/>
            </div>

            <h3 className="text-white home-header-top">Fight the hordes of randomly spawning enemies</h3>
            <p className="text-white home-intro font-text">Enemies lay wait in every direction. Leave it for too long and you will be overwhelmed...</p>

            <div className="home-padding-bottom home-header-top">                
                <Button className="button-text" variant="success" size="lg" onClick={() => handleClick("guide")}>Learn how to combat the arenas</Button>{' '}
            </div>

            <div className="carousel-div">
                <LargeCarousel className="large-carousel" carouselData={carouselImages2}/>
            </div>

            <h3 className="text-white home-header-top">Choose your difficulty tier</h3>
            <p className="text-white home-intro font-text">The harder the tier, the greater the satisfaction...</p>        

            <div className="carousel-div">
                <LargeCarousel className="large-carousel" carouselData={carouselImages3}/>
            </div>

            <div className="home-padding-bottom home-header-top">                
                <Button className="button-text" variant="dark" size="lg" onClick={() => handleClick("arenas")}>The Arenas await you...</Button>{' '}
            </div>
        </>
    )
}

export default Home
