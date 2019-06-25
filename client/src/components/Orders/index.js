import React from 'react';
import OrderNav from '../OrdrNav';
import './orders.css';



const Orders = (props) => {
  return (
    <div>
      <OrderNav />
      <div className='container'>
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
      </div>
    </div>
  );
};

export default Orders;