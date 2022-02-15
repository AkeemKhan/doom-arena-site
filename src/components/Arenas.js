import '../App.css';
import ArenaSelection from "./ArenaSelection";

const Arenas = () => {
    const data = [
        {
            id: "a1m1",
            title: "Arena Gate - Redux",
            description: "Reimagining of a map from Quake III Arena",
            images: [
                "/images/arenagate.png",
                "/images/cardspawn.png",
                "/images/bossroom.png"
            ]
        },
        {
            id: "a1m2",
            title: "House of Pain - Redux",
            description: "Reimagining of a map from Quake III Arena",
            images: [
                "/images/houseofpain.png",
                "/images/entrance.png",
                "/images/hopcourtyard.png"
            ]
        },
        {
            id: "a1m3",
            title: "Abandoned UAC Outposts",
            description: "",
            images: [
                "/images/cliffside.png",
                "/images/ridge.png",
                "/images/outpost.png"
            ]
        },
        {
            id: "a1m4",
            title: "Citadel - Entrance",
            description: "",
            images: [
                "/images/citadel.png",
                "/images/deathpit.png",
                "/images/cdbossroom.png"
            ]
        },
        {
            id: "a1m5",
            title: "UAC Base",
            description: "",
            images: [
                "/images/baseroom.png",
                "/images/pit.png",
                "/images/towers.png"
            ]
        },
        {
            id: "a1m6",
            title: "Teleportation Transit",
            description: "",
            images: [
                "/images/transit.png",
                "/images/ruins.png",
                "/images/armoury.png"
            ]
        },
        {
            id: "a2m1",
            title: "Ruins - Ambush",
            description: "",
            images: [
                "/images/ruinswater.png",
                "/images/ruinsinterior.png",
                "/images/ruinssewer.png"
            ]
        },
        {
            id: "a2m2",
            title: "Chemical Plant",
            description: "",
            images: [
                "/images/chemicalplant.png",
                "/images/chemlobby.png",
                "/images/chemstorage.png"
            ]
        },
        {
            id: "a2m3",
            title: "Glacial Garrisons",
            description: "",
            images: [
                "/images/glacbase.png",
                "/images/glaccaverns.png",
                "/images/glacbfg.png",
                "/images/glacchem.png",
                "/images/glacyellbase.png",
            ]
        },
        {
            id: "a2m4",
            title: "ATF Starship - Invasion",
            description: "",
            images: [
                "/images/atfportalhub.png",
                "/images/atfcommand.png",
                "/images/atfcore.png",
                "/images/atfresidential.png"
            ]
        },
        {
            id: "a2m5",
            title: "Citadel - Colosseum",
            description: "",
            images: [
                "/images/citadelred.png",
                "/images/citadelcolosseum.png",
                "/images/citadelredinterior.png"
            ]
        },
        {
            id: "a2m6",
            title: "Citadel - Blood Throne",
            description: "",
            images: [
                "/images/btmega.png",
                "/images/bthrone.png",
                "/images/btele.png"
            ]
        },
        {
            id: "a3m1",
            title: "Reclaim UAC Base",
            description: "",
            images: [
                "/images/reclaimbase.png",
                "/images/reclaimbroken.png",
                "/images/reclaimcardspawn.png",
                "/images/reclaimdebris.png",
            ]
        },
        {
            id: "a3m2",
            title: "Metropolis - Streets",
            description: "",
            images: [
                "/images/streetsoverview.png",
                "/images/streetsarena.png",
                "/images/streetsresidential.png"
            ]
        },
        {
            id: "a3m3",
            title: "Metropolis - Highrise",
            description: "",
            images: [
                "/images/rooftops2.png",
                "/images/rooftops1.png",
                "/images/rooftops3.png",
                "/images/rooftops4.png",
            ]
        },
        {
            id: "a3m4",
            title: "Caverns",
            description: "",
            images: [
                "/images/caverns_inside.png",
                "/images/caverns_arena.png",
                "/images/caverns_blue.png",
                "/images/caverns_outside.png",
            ]
        },
        {
            id: "a3m5",
            title: "Hell Keep",
            description: "",
            images: [
                "/images/doom-arena-logo.png",
            ]
        },
        {
            id: "a3m6",
            title: "Corrupted Commander",
            description: "",
            images: [
                "/images/doom-arena-logo.png",
            ]
        },
    ];

    const listItems = data.map((d) => 
        <div className="padding-generic">
            <ArenaSelection data={d}/>
        </div>
    );

    const val = data[0];
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
