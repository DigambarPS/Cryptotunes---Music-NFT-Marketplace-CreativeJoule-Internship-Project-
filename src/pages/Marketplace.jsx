import React from "react";
import song1 from "../assets/images/song1.png";
import ethereum from "../assets/images/ethereum.png";
import "./marketplace.css";
import { Link } from "react-router-dom";

function Marketplace({ products, account }) {
  return (
    <>
      <div className="marketplace">
        <div>
          <h1>MARKETPLACE</h1>
        </div>

        <div className="nftgrid">
          {products.map((product, key) => {
            var details = product.musicUrl_musicPhoto_artistPhoto.split(",");
            var musicUrl = details[0].toString();
            var musicPhotoSrc = details[1].toString();
            var artistPhotoSrc = details[2].toString();
            var musicPrice = product.price.toString();
            var mPhoto = `photos&music/${musicPhotoSrc}`;
            console.log(details)
            console.log(details[0].toString())
            console.log(details[1].toString())
            console.log(details[2].toString())
            console.log(`photos&music/${musicPhotoSrc}`)
            return (
              <Link
                className="link"
                to="/music-details"
                key={key}
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
              >
                <div className="marketnft">
                  <div>
                    <img className="market-songimage" src={mPhoto} alt="" />
                  </div>
                  <div className="songname">
                    <h2>{product.name}</h2>
                  </div>
                  <div className="artistname">
                    <h3>{product.artist}</h3>
                  </div>
                  <div className="songprice">
                    <h3>
                      PRICE :{' '}
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
    </>
  );
}
export default Marketplace;
