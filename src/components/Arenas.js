import '../App.css';
import ArenaSelection from "./ArenaSelection";
import React, { useState, useEffect } from 'react';

const Arenas = () => {
    
    const [arenaData,setArenaData]=useState([]);
    
    useEffect(() => {
        fetch('data/arenadata.json')
            .then((res) => res.json())
            .then((data) => setArenaData(data));
    });

    const listItems = arenaData.map((d) => 
        <div className="padding-generic">
            <ArenaSelection data={d}/>
        </div>
    );

    if (listItems == null || listItems.length == 0)
    {
        return (<div className="img-container">Loading...</div>)
    }

    return (        
        <div className="paddingTop">            
            <div className="img-container">
                <img src="/images/pagearenastext.png" className="title-image"/>
            </div>
            <div className="arenas-container">
                {listItems}     
            </div>
        </div>        
    )
}

export default Arenas
