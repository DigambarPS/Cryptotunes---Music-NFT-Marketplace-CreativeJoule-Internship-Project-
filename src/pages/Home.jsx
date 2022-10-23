import React, { useState } from "react";
import img1 from "../assets/images/img11.png";
import img2 from "../assets/images/img22.png";
import img3 from "../assets/images/img3.png";
import guitar from "../assets/images/guitar.png";
import "./home.css";
import { useNavigate, Link } from "react-router-dom";
// import nftcard from "../components/nftcard";

// import song1 from "../assets/images/song1.png";
import ethereum from "../assets/images/ethereum.png";

function Home({ products, account }) {
  var date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  date = dd + "/" + mm + "/" + yyyy;

  const navigate = useNavigate();
  const toMarketplace = () => {
    navigate("/marketplace", { state: { products: products } });
  };

  // const goToNFT = () => {
  //   navigate("/marketplace")
  // }

  return (
    <>
      <div className="grid1">
        <img className="bgimg" src={guitar} />
        <div className="content1">
          <img src={img1} alt="" />
          <div>
            <h1>MINT , COLLECT AND SELL MUSIC NFTS</h1>

            <div>
              <h2>JOIN CRYPTOTUNES NOW </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="grid2">
        <div>
          <h2>LATEST RELEASES</h2>
        </div>
        <div className="nftlist">
          {products.slice(0, 4).map((product, key) => {
            var details = product.musicUrl_musicPhoto_artistPhoto.split(",");
            var musicUrl = details[0].toString();
            var musicPhotoSrc = details[1].toString();
            var artistPhotoSrc = details[2].toString();
            var musicPrice = product.price.toString();
            var mPhoto = `photos&music/${musicPhotoSrc}`;
            {
              /* console.log('details: ',date === product.date) */
            }
            if (product.purchased === false && date === product.date)
              return (
                <Link
                  className="link"
                  to="/music-details"
                  state={{
                    id: product.id.toString(),
                    musicName: product.name,
                    musicArtist: product.artist,
                    musicPrice: musicPrice,
                    musicUrl: musicUrl,
                    musicPhotoSrc: musicPhotoSrc,
                    artistPhotoSrc: artistPhotoSrc,
                    owner: product.owner,
                    description: product.description,
                    purchased: product.purchased,
                  }}
                  key={key}
                >
                  <div className="nftcard" /*onclick={goToNFT}*/ key={key}>
                    <div>
                      <img className="songimage" src={mPhoto} alt="" />
                    </div>
                    <div className="songname">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="artistname">
                      <h3>{product.artist}</h3>
                    </div>
                    <div className="songprice">
                      <h3>
                        PRICE :{" "}
                        {window.web3.utils.fromWei(product.price.toString())}
                      </h3>
                      <img src={ethereum} />
                    </div>
                  </div>
                </Link>
              );
          })}
        </div>
      </div>

      <div className="grid3">
        <div className="content3">
          <div>
            <h2>CREATE NFTS OF YOUR MUSIC AND SELL</h2>
          </div>
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="grid4">
        <div>
          <h2>POPULAR</h2>
        </div>
        <div className="nftlist">
          {console.log("---------------------------------")}
          {products.slice(0, 4).reverse().map((product, key) => {
            var details = product.musicUrl_musicPhoto_artistPhoto.split(",");
            var musicUrl = details[0].toString();
            var musicPhotoSrc = details[1].toString();
            var artistPhotoSrc = details[2].toString();
            var musicPrice = product.price.toString();
            var mPhoto = `photos&music/${musicPhotoSrc}`;
            {
              /* console.log('details: ',details, 'name: ', product.name, 'key: ', key) */
            }
            {
              /* console.log('url: ',musicUrl)
            console.log('music photo ', musicPhotoSrc) */
            }
            {
              /* console.log('nPhoto: ',typeof(mPhoto)) */
            }
            {
              /* console.log('aphoto', artistPhotoSrc) */
            }
            if (product.purchased === false)
              return (
                <Link
                  className="link"
                  to="/music-details"
                  state={{
                    id: product.id.toString(),
                    musicName: product.name,
                    musicArtist: product.artist,
                    musicPrice: musicPrice,
                    musicUrl: musicUrl,
                    musicPhotoSrc: musicPhotoSrc,
                    artistPhotoSrc: artistPhotoSrc,
                    owner: product.owner,
                    description: product.description,
                    purchased: product.purchased,
                  }}
                  key={key}
                >
                  <div className="nftcard" /*onclick={goToNFT}*/ key={key}>
                    <div>
                      <img className="songimage" src={mPhoto} alt="" />
                    </div>
                    <div className="songname">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="artistname">
                      <h3>{product.artist}</h3>
                    </div>
                    <div className="songprice">
                      <h3>
                        PRICE :{" "}
                        {window.web3.utils.fromWei(product.price.toString())}
                      </h3>
                      <img src={ethereum} />
                    </div>
                  </div>
                </Link>
              );
          })}
        </div>
      </div>

      <div className="grid5">
        <div className="content5">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <h1>DISCOVER MORE MUSIC FROM YOUR FAVOURITE ARTIST</h1>
            <h2>EXPLORE MARKETPLACE</h2>
            <div>
              <Link className="link" to={"/marketplace"}>
                <button className="grid5button" /*onclick={toMarketplace}*/>
                  MARKETPLACE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
