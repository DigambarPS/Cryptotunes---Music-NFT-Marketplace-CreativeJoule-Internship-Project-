import React, { Component } from "react";
// import logo from '../logo.png';
// import './App.css';
import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import MarketplacePg from "../pages/Marketplace";
import Create from "../pages/Create";
import MyCollections from "../pages/MyCollection";
import SongDetails from "../pages/Songdetails";
import PlayMusic from "../pages/PlayMusic";
import NoPage from "../pages/NoPage";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch (err) {
        console.log(err);
      }
    }
    //legacy dapp browsers...
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    //Non-dapp browser...
    else {
      console.log("You should consider trying MetaMask!");
    }
  }

  async loadBlockchainData() {
    const web3 = await window.web3;
    //load account
    // console.log(web3)
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    if (networkData) {
      const marketplace = new web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      this.setState({ marketplace });
      console.log(this.state.marketplace);
      const productCount = await marketplace.methods.productCount().call();
      this.setState({ productCount });
      //Load Products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        this.setState({
          products: [...this.state.products, product],
        });
      }
      this.setState({ loading: false });
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      productCount: 0,
      products: [],
      loading: true,
      marketplace: null,
    };
    this.createProduct = this.createProduct.bind(this);
    this.purchaseProduct = this.purchaseProduct.bind(this);
  }

  //create product function
  async createProduct(
    name,
    price,
    artist,
    musicUrl_musicPhoto_artistPhoto,
    description,
    date
  ) {
    this.setState({ loading: true });
    await this.state.marketplace.methods
      .createProduct(
        name,
        price,
        artist,
        musicUrl_musicPhoto_artistPhoto,
        description,
        date
      )
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  async purchaseProduct(id, price) {
    this.setState({ loading: true });
    await this.state.marketplace.methods
      .purchaseProduct(id)
      .send({ from: this.state.account, value: price })
      .once("receipt", (receipt) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      // <div>
      //   <nav className="navbar bg-light">
      //     <div className="container-fluid">
      //       <p className="navbar-brand" href="#">{this.state.account}</p>
      //     </div>
      //   </nav>
      //   <div className="container-fluid mt-2">
      //     <div className="row">
      //       {this.state.loading
      //         ? <div id="loader" className='text-center'><p className='text-center'>Loading...</p></div>
      //         : <Main
      //             products={this.state.products}
      //             purchaseProduct={this.purchaseProduct}
      //             createProduct={this.createProduct}
      //             account = {this.state.account}
      //             />}
      //     </div>
      //     <div div id="main" className='col-lg-6 d-flex flex-column'>
      //             <MyMusic products={this.state.products} account={this.state.account}/>
      //     </div>
      //   </div>
      // </div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route
              index
              element=<Home
                products={this.state.products}
                account={this.state.account}
              />
            />
            <Route
              path="marketplace"
              element=<MarketplacePg
                products={this.state.products}
                account={this.state.account}
              />
            />
            <Route
              path="create"
              element=<Create
                createProduct={this.createProduct}
                account={this.state.account}
              />
            />
            <Route
              path="my-collections"
              element=<MyCollections
                products={this.state.products}
                account={this.state.account}
              />
            />
            <Route
              path="music-details"
              element=<SongDetails
                purchaseProduct={this.purchaseProduct}
                account={this.state.account}
              />
            />
            <Route path="play-music" element=<PlayMusic /> />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
