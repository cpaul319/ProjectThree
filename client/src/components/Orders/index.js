/*  This component displays all purchase history. */

import React, { Component } from "react";
import './orders.css';
import OrderNav from '../OrdrNav';
import axios from "axios";
import "./style.css";
 
const imgUrl = '/images/gotmap.jpg';

const divStyle = {
    backgroundImage: 'url(' + imgUrl + ')',
};

class Orders extends Component {

  constructor() {
    super()
    this.state = {
      swag1quantity: 0,
      swag2quantity: 0,
      swag3quantity: 0,
      swag4quantity: 0,
      swag5quantity: 0,
      swag6quantity: 0,
      swag7quantity: 0,
      swag8quantity: 0,
      swag9quantity: 0,
      swag10quantity: 0,
      swag1price: 199.99,
      swag2price: 229.99,
      swag3price: 208.00,
      swag4price: 46.95,
      swag5price: 14.95,
      swag6price: 74.95,
      swag7price: 20.95,
      swag8price: 199.99,
      swag9price: 349.95,
      swag10price: 34.95,
      index0:0,
      index1:1,
      index2:2,
      index3:3,
      index4:4,
      index5:5,
      index6:6,
      index7:7,
      index8:8,
      index9:9,
      itemId:11,
      user:"",
      email: "",
      loggedInUserName: "",
      loggedInUserEmail: "",
      loggedInUserId: "",
      totalPrice: 0,
      totalQuanity:0
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  };

  //-------------------------------------------------------------------------------

  componentDidMount() {
    console.log(this.state.itemId);
  //  This function loads all purchase history for a user.

    var loggedInUserName = localStorage.getItem('loggedInUserName');
    var loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
    var loggedInUserId = localStorage.getItem('loggedInUserId');

    console.log(loggedInUserEmail);
    this.setState({ loggedInUserName });
    this.setState({ loggedInUserEmail });
    this.setState({ loggedInUserId });
    const that = this;
    const user = {
      email: loggedInUserEmail
    }  
    axios.post("/orders", {
      email: loggedInUserEmail,
     
  })
     .then(function (res) {
          that.setState({
            email: loggedInUserEmail,
            
          });
          that.setState({
            swag1quantity: res.data.swag1quantity
          });
          
          that.setState({
            swag2quantity: res.data.swag2quantity
          });
          that.setState({
            swag3quantity: res.data.swag3quantity
          });
          that.setState({
            swag4quantity: res.data.swag4quantity
          });
          that.setState({
            swag5quantity: res.data.swag5quantity
          });
          that.setState({
            swag6quantity: res.data.swag6quantity
          });
          that.setState({
            swag7quantity: res.data.swag7quantity
          });
          that.setState({
            swag8quantity: res.data.swag8quantity
          });
          that.setState({
            swag9quantity: res.data.swag9quantity
          });
          that.setState({
            swag10quantity: res.data.swag10quantity
          });
      }).catch(function (error) {
        console.log(error);
        console.log("something goes wrong");
      });
      
  }
  
  deleteItem() {

    //  This function changes user database information appropriately when user deletes an item.

    const that = this;
    console.log("This, orders page");
    console.log(this.state.itemId);
    console.log("That, orders page");
    console.log(that.state.itemId);
    
// console.log(this.props.swag0index);
//
    if (that.state.itemId===0) {
      that.state.swag1quantity--;
    } else if (that.state.itemId===1) {
      that.state.swag2quantity--;
    } else if (that.state.itemId===2) {
      that.state.swag3quantity--;
    } else if (that.state.itemId===3) {
      that.state.swag4quantity--;
    } else if (that.state.itemId===4) {
      that.state.swag5quantity--;
    } else if (that.state.itemId===5) {
      that.state.swag6quantity--;
    } else if (that.state.itemId===6) {
      that.state.swag7quantity--;
    } else if (that.state.itemId===7) {
      that.state.swag8quantity--;
    } else if (that.state.itemId===8) {
      that.state.swag9quantity--;
    } else if (that.state.itemId===9){
      that.state.swag10quantity--;
    }
    const user = {
      swag1quantity: that.state.swag1quantity,
      swag2quantity: that.state.swag2quantity,
      swag3quantity: that.state.swag3quantity,
      swag4quantity: that.state.swag4quantity,
      swag5quantity: that.state.swag5quantity,
      swag6quantity: that.state.swag6quantity,
      swag7quantity: that.state.swag7quantity,
      swag8quantity: that.state.swag8quantity,
      swag9quantity: that.state.swag9quantity,
      swag10quantity: that.state.swag10quantity,
      email: that.state.loggedInUserEmail
    }
   


      axios.put("/api/delete", user)
        .then(function (response) {
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }

 

  render() {
    // for (var k = 1; k <= 10; k++){
    //   this.state.total +=(this.state.swag[k]price)*(this.state.swag[k]quantity)
    //   } 
   
      this.state.total =(
      ((this.state.swag1price)*(this.state.swag1quantity))+
      ((this.state.swag2price)*(this.state.swag2quantity))+
      ((this.state.swag3price)*(this.state.swag3quantity))+
      ((this.state.swag4price)*(this.state.swag4quantity))+
      ((this.state.swag5price)*(this.state.swag5quantity))+
      ((this.state.swag6price)*(this.state.swag6quantity))+
      ((this.state.swag7price)*(this.state.swag7quantity))+
      ((this.state.swag8price)*(this.state.swag8quantity))+
      ((this.state.swag9price)*(this.state.swag9quantity))+
      ((this.state.swag10price)*(this.state.swag10quantity)));
      this.state.total= this.state.total.toFixed(2);

      localStorage.setItem('total', this.state.total);
    console.log(this.state.total);
    console.log(this.state.swag1price);
    console.log(this.state.swag1quantity);
    return (
      <div style={divStyle}>
        <OrderNav />
        <div className='container order-wrap'>
          <h2 className='text-center' id="history"></h2>
          {this.state.swag1quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gottzfigs8js_1_30c0f903-0c3a-462f-893d-cc4d1b2dcd28_360x.jpg?v=1558123631} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">John Snow collectible figure</h5>
                    <p className="card-text card-desc">This stunning 1/6th scale Threezero figure of Jon Snow stands a full 11 1/2 inches tall. Based on Season 8 of Game of Thrones, it features a custom-designed body, and a finely detailed head sculpt that truly captures the likeness of actor Kit Harrington.</p>
                    <p class = "q">Price: {"199.99"}</p>
                    <p class = "q">Quantity: {this.state.swag1quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={0}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag2quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gottzfig06_1_360x.jpg?v=1541022529} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Brienne of Tarth scale collectible figure</h5>
                    <p className="card-text card-desc">This 1/6 scale collectible figure of Brienne of Tarth from Season 7 of Game of Thrones will be a great addition to your collection. Standing at 12.5 inches tall, this figure features a stunning likeness of actress Gwendoline Christie as Brienne, including textured hair, piercing eyes, and bold face.</p>
                    <p class = "q">Price: {"229.99"}</p>
                    <p class = "q">Quantity: {this.state.swag2quantity}</p>
                  </div>
                  <div className="card-btn">  
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={1}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag3quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://d8mkdcmng3.imgix.net/3fb0/collectables-action-figures-of-thrones-white-walker-figure.jpg?auto=format&bg=0FFF&fit=fill&h=600&q=100&w=600&s=c45684fd8761d66007a8b96ddd972f03} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">White Walker deluxe figure</h5>
                    <p className="card-text card-desc">Add to your Game of Thrones collection with this stunning 1/6th scale deluxe White Walker figure from Threezero. This figure stands 13 inches tall, and includes tailored clothing with finely detailed textures, a life-like head, shoulder mantle, breastplate, forearm bracers, boots, a spear, and more. It also comes with exchangeable hands -- one in a relaxed position, and another in a gripped position -- a faux-leather skirt, and bare feet.</p>
                    <p class = "q">Price: {"208.00"}</p>
                    <p class = "q">Quantity: {this.state.swag3quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={2}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag4quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotnbsculp02_720x.jpg?v=1529653266} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Drogon Dragon Scuplt</h5>
                    <p className="card-text card-desc">This Game of Thrones sculpture features a striking rendition of the dragon Drogon. Amazingly detailed and hand painted, this sculpture of Drogon stands approximately 4.5 inches tall.</p>
                    <p className = "q">Price: {"46.95"}</p>
                    <p className = "q">Quantity: {this.state.swag4quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={3}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag5quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotfepegg02_b153b97c-5b21-4377-8067-915973fa696f_360x.jpg?v=1526110992} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Brown Dragon Egg Plush</h5>
                    <p className="card-text card-desc">Long thought to be extinct, the only remnants of the dragon species are a trio of seemingly petrified Dragon eggs given to Daenerys Targaryen as a wedding gift. Daenerys, the Mother of Dragons, later hatches the eggs in the funeral pyre of husband Khal Drogo. This brown plush dragon egg is a soft replica of the one featured in a pivotal episode of Game of Thrones.</p>
                    <p className = "q">Price: {"14.95"}</p>
                    <p className = "q">Quantity: {this.state.swag5quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={4}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag6quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotusrisk01_1fe4acaf-c0ca-4262-a80c-96046a7b6649_1024x1024@2x.jpg?v=1529653359} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Game of Trones Risk</h5>
                    <p className="card-text card-desc">RISK: Game of Thrones Edition Game escalates Risk, the classic game of strategic conquest, to an epic level of chaos and war in a battle for the Iron Throne. Featuring striking game packaging, two custom-designed game boards, three ways to play, seven finely sculpted armies, and more than 650 total pieces, this game of strategic conquest will test the wits and bravery of both Risk and Game of Thrones fans.</p>
                    <p className = "q">Price: {"74.95"}</p>
                    <p className = "q">Quantity: {this.state.swag6quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={5}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag7quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotmemtlirn_110x110@2x.jpg?v=1556648700} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Iron Throne Model</h5>
                    <p className="card-text card-desc">Build your own Iron Throne and decorate your home, dorm, or office with this Iron Throne Metal Model from Game of Thrones. Model measures 2.72in x 4.33in x 2.6in.</p>
                    <p className = "q">Price: {"20.95"}</p>
                  
                    <p className = "q">Quantity: {this.state.swag7quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={6}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag8quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotnptwpnnk_110x110@2x.jpg?v=1554695057} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Night King acrylic sword</h5>
                    <p className="card-text card-desc">This stunning replica of the Night King's sword from Game of Thrones measures 41.75 inches in length, and is wrapped at the handle with faux-leather.</p>
                    <p className = "q">Price: {"199.99"}</p>
                    
                    <p className = "q">Quantity: {this.state.swag8quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={7}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag9quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotjcneedle_1024x1024@2x.jpg?v=1530613538} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Needle, sword of Arya Stark</h5>
                    <p className="card-text card-desc">The younger of the Stark daughters, Arya has put her survival skills to use as she continues to evade the forces that seek her. This adult collectible is officially licensed from HBOr's hit series Game of Thronesr and each sword is individually serialized. It includes a display plaque and a certificate of authenticity. This item is not a toy, please keep out of the reach of children.</p>
                    <p className = "q">Price: {"349.95"}</p>
                    <p className = "q">Quantity: {this.state.swag9quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={8}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
          {this.state.swag10quantity > 0 &&
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={"https://cdn.shopify.com/s/files/1/0006/6060/2935/products/gotnptwpn01_1024x1024@2x.jpg?v=1538206819} className='img-thumbnail col-md-4 row align-itmes-center justify-content-center'"} className="card-img" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Catspaw foam blade</h5>
                    <p className="card-text card-desc">Prove the worth of Valyrian foam by wielding this Foam Catspaw Blade from the hit HBO series Game of Thrones.  This lovely mock weapon is crafted in perfect detail, just like the weapon that almost took Bran from us early in the show!</p>
                    <p className = "q">Price: {"34.95"}</p>
                    <p className = "q">Quantity: {this.state.swag10quantity}</p>
                  </div>
                  <div className="card-btn">
                    <button className='btn btn-outline-dark' onClick={() => this.deleteItem(this.state.itemId)} itemId={9}>Delete this item</button>
                  </div>
                </div>
                <div className="col-md-2 row align-items-center justify-content-center">
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
};

export default Orders;