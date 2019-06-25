import React from 'react';
<<<<<<< HEAD
=======
import OrderNav from '../OrdrNav';
>>>>>>> d16bcc6e373530c21cef77a8188abb19e96b6900
import './orders.css';
import OrderNav from '../OrderNav'



const Orders = (props) => {
  return (
    <div>
      <OrderNav />
      <div className='container'>
<<<<<<< HEAD
        <h2 className='text-center'>Order History</h2>
        <br></br>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src='/images/dragon.jpg' className="card-img" alt="..." />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Item 1</h5>
                <p className="card-text">This is an example of a description for a purchased item. This is only a test.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div className="col-md-2">
            <span className='align-middle'><p className='text-center'>lasjdf</p></span>
          </div>
        </div>
=======
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Order Number</th>
              <th scope="col">Item</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Item 1</td>
              <td>$45</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Item 2</td>
              <td>$30</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Item 3</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>
>>>>>>> d16bcc6e373530c21cef77a8188abb19e96b6900
      </div>
    </div>
  </div>
  );
};

export default Orders;