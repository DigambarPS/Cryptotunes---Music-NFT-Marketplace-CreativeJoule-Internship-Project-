import "./mycollection.css";
import { Link } from "react-router-dom";
import React from "react";
import nftbg from "../assets/images/mycollectionbg.png";

function MyCollection({ products, account }) {
  var srNO = 0;
  return (
    <div className="center">
      <div className="App">
        <h1 className="mynftsh1">MY COLLECTIONS</h1>
        <div className="center">
          <br></br>
          <br></br>
          <table className="mynfttable">
            {/* <img classNmae="nftbg" src={nftbg} alt=''/> */}
            <tr>
              <th>SR. NO</th>
              <th>NFT ID</th>
              <th>SONG</th>
              <th>ARTIST</th>
              <th>PRICE</th>
            </tr>

            {products.map((product, key) => {
              var details = product.musicUrl_musicPhoto_artistPhoto.split(",");
              var musicUrl = details[0].toString();
              var musicPhotoSrc = details[1].toString();
              var artistPhotoSrc = details[2].toString();
              var musicPrice = product.price.toString();
              if (product.owner === account && product.purchased === true) {
                srNO = srNO + 1;
                return (
                  <tr key={key}>
                    <td>{srNO}</td>
                    <td>{product.id.toString()}</td>
                    <td>{product.name}</td>
                    <td>{product.artist}</td>
                    <td>
                      {window.web3.utils.fromWei(product.price.toString())}
                    </td>
                    <td>
                      <Link
                        className="link"
                        to="/play-music"
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
                        <button className="play-button">PLAY SONG</button>
                      </Link>
                    </td>
                  </tr>
                );
              }
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
export default MyCollection;
