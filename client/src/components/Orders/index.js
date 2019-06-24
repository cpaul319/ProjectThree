import React from 'react';
import Nav from '../Nav';
import './orders.css';



const Orders = (props) => {
  return (
    <div>
      <Nav />
      <div className='container'>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Order Number</th>
              <th scope="col">Date</th>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope='col'>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Date 1</td>
              <td>Item 1</td>
              <td>1</td>
              <td>$45</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Date 2</td>
              <td>Item 2</td>
              <td>1</td>
              <td>$30</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Date 3</td>
              <td>Item 3</td>
              <td>5</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;