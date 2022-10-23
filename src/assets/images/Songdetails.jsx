import React from "react";
import song1 from "../assets/images/song1.png";
import artist1 from "../assets/images/artist1.png"
import ethereum from "../assets/images/ethereum.png";
import cfb from "../assets/images/cfb.png"
import cinsta from "../assets/images/cinsta.png"
import ctwitter from "../assets/images/ctwitter.png"
import cspotify from "../assets/images/cspotify.png"
import cytm from "../assets/images/cytm.png"
import capplem from "../assets/images/capplem.png"
import aboutbg from "../assets/images/red.svg"
import "./songdetails.css";

function Songdetails() {
    return (
    <>
    <div className="songdetails">
        <div>
        <h1>SONG DETAILS</h1>
        </div>
        <div  className="detailsflex">
            <div className="songdetailimg">
            <img src={song1} alt="songimg"/>
            </div>
            <div className="detailsongname">
                <h2>NEVER STOP</h2>
            </div>
            <div className="detailartistname">
                <h3>RYAN DR</h3>
            </div>
            <div className="owner">
                <h3>OWNER :[] 00f909fa8a0809a9dg9a0ad97g9d0g7a09d0ag </h3>
            </div>
            <div className="songdetailprice">
                <h3>PRICE : 5 </h3>
                <img src={ethereum} alt="ETH" />
                <button className="buybutton">BUY NOW</button>
            </div>
        </div>
    </div>

    <div className="about">
        <div className="aboutflex">
            <div className="artistflex">
                <h2>ABOUT ARTIST</h2>
                <h4>RYAN DR IS A RAP ARTIST FROM GOA.</h4>
            </div>
            <img className="artistimg" src={artist1} alt="artist"/>
        </div>
        <div className="socialmediaflex">
            <div className="socialmediagrid">
                <h3>FOLLOW ON SOCIAL MEDIA</h3>
                    <img className="songdetailicons" src={cfb}/>
                    <img className="songdetailicons" src={cinsta}/>
                    <img className="songdetailicons" src={ctwitter}/>
            </div>
                
            <div className="socialmediagrid">
                <h3>FOLLOW ON MUSIC APPS</h3>
                    <img className="songdetailicons" src={cspotify}/>
                    <img className="songdetailicons" src={cytm}/>
                    <img className="songdetailicons" src={capplem}/>
            </div>
        </div>
        <img className="aboutbgimg" src={aboutbg} />
    </div>
</>
);
}
export default Songdetails;