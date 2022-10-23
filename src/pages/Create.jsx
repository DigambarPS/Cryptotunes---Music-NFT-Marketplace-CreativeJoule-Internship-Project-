import './Create.css';
import { useState } from "react";
import logobg from "../assets/images/logotr.png";
import React, { createRef } from 'react';
import ProgressBar from '../components/ProgressBar';

const Create = ({createProduct, account}) => {


  // const [productName, setProductName] = useState("");
  // const [productPrice, setProductPrice] = useState("");
  // const [artist, setArtist] = useState("");
  // const [music, setMusic] = useState("");
  // const [musicPhoto, setMusicPhoto] = useState("");
  // const [artistPhoto, setArtistPhoto] = useState("");
  // const [description, setDescription] = useState("");
  // const [combinedPaths, setCombinedPath] = useState('')

  // const [showDetails, setShowDetails] = useState(false);

  // var date = new Date();
  // var dd = String(date.getDate()).padStart(2, "0");
  // var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var yyyy = date.getFullYear();

  // date = dd + "/" + mm + "/" + yyyy;

  // const [progress, setProgress] = useState("0%");

  // // const t = document.getElementById('second')
  // // t.
  // const fileInput = createRef();

  // const fileInput2 = createRef();

  // const fileInput3 = createRef();

  // const mulFilesProcess = (files) => {
  //   var request = new XMLHttpRequest();
  //   setProgress("0%");
  //   if (files.length === 0) return;
  //   request.upload.addEventListener("progress", showProgress);
  //   request.open("POST", "/uploadFile", true);
  //   var formData = new FormData();
  //   for (var file = 0; file < files.length; file++) {
  //     formData.append("file" + file, files[file], files[file].name);
  //   }
  //   request.send(formData);
  // };

  // const showProgress = (evt) => {
  //   let percentage = (evt.loaded / evt.total) * 100 + "%";
  //   console.log(percentage);
  //   setProgress(percentage);
  // };

  // function processFiles(){
  //   // console.log(fileInput.current.files[0].name)
  //   setMusic(fileInput.current.files[0].name);
  //   setMusicPhoto(fileInput2.current.files[0].name);
  //   setArtistPhoto(fileInput3.current.files[0].name);
  //   // console.log(music, typeof(music))
  //   let files = fileInput.current.files;
  //   let files2 = fileInput2.current.files;
  //   let files3 = fileInput3.current.files;
  //   let temp = [];
  //   temp.push(files);
  //   temp.push(files2);
  //   temp.push(files3);
  //   // temp.push(files3)
  //   temp = Object.assign({}, temp);
  //   // files.push(files3)
  //   // console.log(files)
  //   // console.log(temp[0])
  //   // console.log(document.getElementById('first'))

  //   mulFilesProcess(temp[0]);
  //   mulFilesProcess(temp[1]);
  //   mulFilesProcess(temp[2]);

  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setMusic(fileInput.current.files[0].name);
  //   setMusicPhoto(fileInput2.current.files[0].name);
  //   setArtistPhoto(fileInput3.current.files[0].name);
    

  //   let price_wei = window.web3.utils.toWei(productPrice.toString());
  //   console.log(music)
  //   console.log(artistPhoto)
  //   console.log(musicPhoto)
  //   setCombinedPath(music.concat(",", artistPhoto, ",", musicPhoto));
  //   console.log(combinedPaths, typeof(combinedPaths))
  //   processFiles()
  //   createProduct(
  //     productName,
  //     price_wei,
  //     artist,
  //     combinedPaths,
  //     description,
  //     date
  //   );
  // };



  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [artist, setArtist] = useState("");
  const [music, setMusic] = useState("");
  const [musicPhoto, setMusicPhoto] = useState("");
  const [artistPhoto, setArtistPhoto] = useState("");
  const [description, setDescription] = useState("");

  const [showDetails, setShowDetails] = useState(false);

  var date = new Date();
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();

  date = dd + "/" + mm + "/" + yyyy;

  const [progress, setProgress] = useState("0%");

  // const t = document.getElementById('second')
  // t.
  const fileInput = createRef();

  const fileInput2 = createRef();

  const fileInput3 = createRef();

  const mulFilesProcess = (files) => {
    var request = new XMLHttpRequest();
    setProgress("0%");
    if (files.length === 0) return;
    request.upload.addEventListener("progress", showProgress);
    request.open("POST", "/uploadFile", true);
    var formData = new FormData();
    for (var file = 0; file < files.length; file++) {
      formData.append("file" + file, files[file], files[file].name);
    }
    request.send(formData);
  };

  const showProgress = (evt) => {
    let percentage = (evt.loaded / evt.total) * 100 + "%";
    console.log(percentage);
    setProgress(percentage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let price_wei = window.web3.utils.toWei(productPrice.toString());
    let combinedPaths = music.concat(",", musicPhoto, ",", artistPhoto);
    console.log(combinedPaths)
    createProduct(
      productName,
      price_wei,
      artist,
      combinedPaths,
      description,
      date
    );
  };

  const processFiles = (e) => {
    e.preventDefault();
    setMusic(fileInput.current.files[0].name);
    setMusicPhoto(fileInput2.current.files[0].name);
    setArtistPhoto(fileInput3.current.files[0].name);
    let files = fileInput.current.files;
    let files2 = fileInput2.current.files;
    let files3 = fileInput3.current.files;
    let temp = [];
    temp.push(files);
    temp.push(files2);
    temp.push(files3);
    // temp.push(files3)
    temp = Object.assign({}, temp);
    // files.push(files3)
    // console.log(files)
    // console.log(temp[0])
    // console.log(document.getElementById('first'))

    mulFilesProcess(temp[0]);
    mulFilesProcess(temp[1]);
    mulFilesProcess(temp[2]);
  };




  return (
      <div className='container'>
        <form className='formbg' onSubmit={handleSubmit}>
    
          <div className='create'>
            <h1 >CREATE NEW NFT</h1>
          </div>
    
          <div className='create'>
            <h2 >NFT DETAILS</h2>
          </div>
    
          <div className='form'>
            <img className="formbg-image" src={logobg} />
            <div className='formcontent'>
            <label>SONG NAME </label>
            <input 
            placeholder='Enter Song Name' 
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            /> 

            <label>ARTIST NAME</label>
            <input 
            placeholder='Enter Artist Name' 
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
            /> 
            <label>PRICE (ETH)</label>
            <input 
            placeholder='Enter Price' 
            type="text" 
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            /> 

            <label>SONG FILE</label>
            <input 
            type="file"
            ref={fileInput}
            required
            />

            <label>SONG IMAGE</label>
            <input 
            type="file" 
            ref={fileInput2}
            required
            />


            <label>ARTIST IMAGE</label>
            <input 
            type="file"
            ref={fileInput3}
            required
            />

          <button
          id="click"
          className='upload-button'
          /*onClick={() => { document.getElementById('browser').click(); }}*/ onClick={(
            e
          ) => processFiles(e)}
        >
          UPLOAD
        </button>
        <ProgressBar progress={progress} />
        {progress === "100%" && <span className='upload-span'>File Uploaded Successfully!</span>}
        {/* <span className='upload-span'>File Uploaded Successfully!</span> */}
            <label>ARTIST DESCRIPTION</label>
            <textarea 
            placeholder='Enter Artist Description' 
            type="text" 
            rows="3" 
            cols="30" 
            className='createtextarea'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            />
          </div>
            <button type="submit" className='submitBtn'> MINT </button>
          </div>
        </form>
      </div>
  )
}
export default Create