import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import "./playMusic.css";

// const PlayMusic = () => {
//     const location = useLocation()
//     const [locationState, setLocationState] = useState({id: '', musicName: '', musicArtist: '', musicPrice: '', musicUrl: '', musicPhotoSrc: '', artistPhotoSrc: '', owner: '', description: '', purchased: null})

//     useEffect(() => {
//         if(location.state){
//             setLocationState(location.state)
//         }
//     }, [location]);
//   return (
//     <div>
//     <img src={`photos&music/${locationState.musicPhotoSrc}`} alt="music photo" />
//     {/* <img src={locationState.artistPhotoSrc} alt="music photo" /> */}
//     <p>song name: {locationState.musicName}</p>
//     <p>song name: {locationState.musicArtist}</p>
//     <ReactAudioPlayer
//         src={`photos&music/${locationState.musicUrl}`}
//         controls
//       />
//     </div>
//   )
// }

// export default PlayMusic

// import React, {useState, useEffect}from "react";

import ethereum from "../assets/images/ethereum.png";
import cfb from "../assets/images/cfb.png";
import cinsta from "../assets/images/cinsta.png";
import ctwitter from "../assets/images/ctwitter.png";
import cspotify from "../assets/images/cspotify.png";
import cytm from "../assets/images/cytm.png";
import capplem from "../assets/images/capplem.png";
import aboutbg from "../assets/images/red.svg";
import "./songdetails.css";
// import { useLocation, Link } from "react-router-dom"

function PlayMusic({ purchaseProduct, account }) {
  const location = useLocation();
  const [locationState, setLocationState] = useState({
    id: "",
    musicName: "",
    musicArtist: "",
    musicPrice: "",
    musicUrl: "",
    musicPhotoSrc: "",
    artistPhotoSrc: "",
    owner: "",
    description: "",
    purchased: null,
  });

  useEffect(() => {
    if (location.state) {
      setLocationState(location.state);
    }
  }, [location]);
  var mphoto = `photos&music/${locationState.musicPhotoSrc}`;
  var aphoto = `photos&music/${locationState.artistPhotoSrc}`;
  // console.log("music: ", parseInt(locationState.musicPhotoSrc));
  // console.log("art: ", parseInt(locationState.artistPhotoSrc));

  return (
    <>
      <div className="songdetails">
        <div>
          <h1>MUSIC PLAYER</h1>
        </div>
        <div className="detailsflex">
          <div className="songdetailimg">
            <img src={mphoto} alt="songimg" />
          </div>
          <div className="detailsongname">
            <h2>{locationState.musicName}</h2>
          </div>
          <div className="detailartistname">
            <h3>{locationState.musicArtist}</h3>
          </div>
          {/* <div className="owner">
                <h3>OWNER : {locationState.owner}</h3>
            </div> */}
          {/* <div className="songdetailprice">
                <h3>PRICE : {window.web3.utils.fromWei(locationState.musicPrice.toString())} </h3>
                <img src={ethereum} alt="ETH" />
                {
                    (locationState.purchased === false) 
                    ? 
                    
                    <button 
                        className="buybutton" 
                        onClick={(event) => {
                                event.preventDefault();
                                purchaseProduct(parseInt(locationState.id), parseInt(locationState.musicPrice));
                            }}>
                            BUY NOW
                    </button>
                    :
                    <p style={{color: 'red'}}>SOLD OUT</p>
                    
                }
                
            </div> */}
          <ReactAudioPlayer
            className="player"
            src={`photos&music/${locationState.musicUrl}`}
            controls
          />
        </div>
      </div>

      <div className="about">
        <div className="artistflex">
          <h2>ABOUT ARTIST</h2>
          <h4>{locationState.description}</h4>
        </div>
        <div>
          <img className="artistimg" src={aphoto} alt="artist" />
        </div>

        <div className="socialmediaflex">
          <div className="socialmediagrid">
            <h3>FOLLOW ON SOCIAL MEDIA</h3>
            <img className="songdetailicons" src={cfb} />
            <img className="songdetailicons" src={cinsta} />
            <img className="songdetailicons" src={ctwitter} />
          </div>

          <div className="socialmediagrid">
            <h3>FOLLOW ON MUSIC APPS</h3>
            <img className="songdetailicons" src={cspotify} />
            <img className="songdetailicons" src={cytm} />
            <img className="songdetailicons" src={capplem} />
          </div>
        </div>
        <img className="aboutbgimg" src={aboutbg} />
      </div>
    </>
  );
}
export default PlayMusic;
