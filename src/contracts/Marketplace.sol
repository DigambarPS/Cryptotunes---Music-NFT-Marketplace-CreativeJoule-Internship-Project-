// pragma solidity ^0.5.16;

// contract Marketplace {
//     string public name;
//     uint public productCount = 0;
//     mapping(uint => Product) public products;

//     //Product Structure
//     struct Product {
//         uint id;
//         string name;
//         uint price;
//         string artist;
//         string music;
//         string music_photo;
//         string artist_photo;
//         string description;
//         address payable owner;
//         bool purchased;
//     }

//     event ProductCreated(
//         uint id,
//         string name,
//         uint price,
//         string artist,
//         string music,
//         string music_photo,
//         string artist_photo,
//         string description,
//         address payable owner,
//         bool purchased
//     );

//     event ProductPurchased(
//         uint id,
//         string name,
//         uint price,
//         string artist,
//         string music,
//         string music_photo,
//         string artist_photo,
//         string description,
//         address payable owner,
//         bool purchased
//     );

//     constructor() public {
//         name = "Web3 MarketPlace";
//     }

//     function createProduct(string memory _name, uint _price, string memory _artist, string memory _music, string memory _music_photo, string memory _artist_photo, string memory _description) public {
//         //Validate the product
//         require(bytes(_name).length > 0); //validate name
//         require(_price > 0); //validate price
//         require(bytes(_artist).length > 0);
//         require(bytes(_music).length > 0);
//         require(bytes(_music_photo).length > 0);
//         require(bytes(_artist_photo).length > 0);
//         require(bytes(_description).length > 0);
//         //increment product count
//         productCount ++;
//         //create product
//         products[productCount] = Product(productCount, _name, _price, _artist, _music, _music_photo, _artist_photo, _description, msg.sender, false);
//         // _artist, _music,
//         //trigger an event to inform blockchain.
//         emit ProductCreated(productCount, _name, _price, _artist, _music, _music_photo, _artist_photo, _description, msg.sender, false);
//     }

//     function purchaseProduct(uint _id) public payable {
//         //Fetch Product
//         Product memory _product = products[_id];
//         //Fetch the owner
//         address payable _seller = _product.owner;
//         //Product is valid 
//         require(_product.id > 0 && _product.id <= productCount); //Validate ID
//         require(msg.value >= _product.price); // Enough Ether in Transaction
//         require(!_product.purchased);//Validate Purchasable
//         require(_seller != msg.sender);//Buye and Seller are different
//         //Purchase It - Transfer Ownership
//         _product.owner = msg.sender;
//         //Product Purchased
//         _product.purchased = true;
//         //Update the product
//         products[_id] = _product;
//         //Pay the seller by sending them Ether
//         address(_seller).transfer(msg.value);
//         //Trigger an event
//          emit ProductPurchased(productCount, _product.name, _product.price,  _product.artist, _product.music, _product.music_photo, _product.artist_photo, _product.description, msg.sender, true);
//         //  _product.artist, _product.music,
//     }
// }



pragma solidity ^0.5.16;

contract Marketplace {
    string public name;
    uint public productCount = 0;
    mapping(uint => Product) public products;
    //Product Structure
    struct Product {
        uint id;
        string name;
        uint price;
        string artist;
        string musicUrl_musicPhoto_artistPhoto;
        string description;
        string date;
        address payable owner;
        bool purchased;
    }

    event ProductCreated(
        uint id,
        string name,
        uint price,
        string artist,
        string musicUrl_musicPhoto_artistPhoto,
        string description,
        string date,
        address payable owner,
        bool purchased
    );

    event ProductPurchased(
        uint id,
        string name,
        uint price,
        string artist,
        string musicUrl_musicPhoto_artistPhoto,
        string description,
        string date,
        address payable owner,
        bool purchased
    );

    constructor() public {
        name = "Web3 MarketPlace";
    }

    function createProduct(string memory _name, uint _price, string memory _artist, string memory _musicUrl_musicPhoto_artistPhoto, string memory _description, string memory _date) public {
        //Validate the product
        require(bytes(_name).length > 0); //validate name
        require(_price > 0); //validate price
        require(bytes(_artist).length > 0);
        require(bytes(_musicUrl_musicPhoto_artistPhoto).length > 0);
        require(bytes(_description).length > 0);
        require(bytes(_date).length > 0);
        //increment product count
        productCount ++;
        //create product
        products[productCount] = Product(productCount, _name, _price, _artist, _musicUrl_musicPhoto_artistPhoto, _description, _date, msg.sender, false);
        // _artist, _music,
        //trigger an event to inform blockchain.
        emit ProductCreated(productCount, _name, _price, _artist, _musicUrl_musicPhoto_artistPhoto, _description, _date, msg.sender, false);
    }

    function purchaseProduct(uint _id) public payable {
        //Fetch Product
        Product memory _product = products[_id];
        //Fetch the owner
        address payable _seller = _product.owner;
        //Product is valid 
        require(_product.id > 0 && _product.id <= productCount); //Validate ID
        require(msg.value >= _product.price); // Enough Ether in Transaction
        require(!_product.purchased);//Validate Purchasable
        require(_seller != msg.sender);//Buye and Seller are different
        //Purchase It - Transfer Ownership
        _product.owner = msg.sender;
        //Product Purchased
        _product.purchased = true;
        //Update the product
        products[_id] = _product;
        //Pay the seller by sending them Ether
        address(_seller).transfer(msg.value);
        //Trigger an event
         emit ProductPurchased(productCount, _product.name, _product.price,  _product.artist, _product.musicUrl_musicPhoto_artistPhoto, _product.description, _product.date, msg.sender, true);
        //  _product.artist, _product.music,
    }

    // function accountData(address _owner) public {
    //     Product[] memory _product = products._owner;

    // }
}
















// pragma solidity ^0.5.16;

// contract Marketplace {
//     string public name;
//     uint public productCount = 0;
//     mapping(uint => Product_primary) public products_pri;
//     mapping(uint => Product_secondary) public products_sec;
//     //Product Structure
//     struct Product_primary {
//         uint id;
//         string name;
//         uint price;
//         string artist;
//         address payable owner;
//         bool purchased;
//     }

//     struct Product_secondary{
//         uint id;
//         string music;
//         string music_photo;
//         string artist_photo;
//         string description;
//     }

//     event ProductPriCreated(
//         uint id,
//         string name,
//         uint price,
//         string artist,
//         address payable owner,
//         bool purchased
//     );

//     event ProductPriPurchased(
//         uint id,
//         string name,
//         uint price,
//         string artist,
//         address payable owner,
//         bool purchased
//     );

//     event ProductSecCreated(
//         uint id,
//         string music,
//         string music_photo,
//         string artist_photo,
//         string description,
//     );

//     event ProductSecPurchased(
//         uint id,
//         string music,
//         string music_photo,
//         string artist_photo,
//         string description,
//     );

//     constructor() public {
//         name = "Web3 MarketPlace";
//     }

//     function createPriProduct(string memory _name, uint _price, string memory _artist) public {
//         //Validate the product
//         require(bytes(_name).length > 0); //validate name
//         require(_price > 0); //validate price
//         require(bytes(_artist).length > 0);
//         //increment product count
//         productCount ++;
//         //create product
//         products_pri[productCount] = Product_primary(productCount, _name, _price, _artist, msg.sender, false);
//         // _artist, _music,
//         //trigger an event to inform blockchain.
//         emit ProductCreated(productCount, _name, _price, _artist, msg.sender, false);
//     }

//     function purchaseProduct(uint _id) public payable {
//         //Fetch Product
//         Product memory _product = products[_id];
//         //Fetch the owner
//         address payable _seller = _product.owner;
//         //Product is valid 
//         require(_product.id > 0 && _product.id <= productCount); //Validate ID
//         require(msg.value >= _product.price); // Enough Ether in Transaction
//         require(!_product.purchased);//Validate Purchasable
//         require(_seller != msg.sender);//Buye and Seller are different
//         //Purchase It - Transfer Ownership
//         _product.owner = msg.sender;
//         //Product Purchased
//         _product.purchased = true;
//         //Update the product
//         products[_id] = _product;
//         //Pay the seller by sending them Ether
//         address(_seller).transfer(msg.value);
//         //Trigger an event
//          emit ProductPurchased(productCount, _product.name, _product.price,  _product.artist, _product.music, _product.music_photo, _product.artist_photo, _product.description, msg.sender, true);
//         //  _product.artist, _product.music,
//     }
// }