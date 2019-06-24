import React from 'react';
import './orders.css';
import OrderNav from '../OrderNav'



const Orders = (props) => {
  return (
    <div>
      <OrderNav />
      <div className='container'>
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
      </div>
    </div>
  </div>
  );
};

export default Orders;