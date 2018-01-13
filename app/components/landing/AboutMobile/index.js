/**
*
* About
*
*/

import React from 'react';
import Vendors from 'assets/images/vendors_circle.png';
import Chat from 'assets/images/chat_circle.png';
import Payment from 'assets/images/payment_circle.png';
import Facebook from 'assets/images/fb.png';
import Instagram from 'assets/images/ig.png';
import Gradient from './Gradient';
import Button from '../About/Button';

function About(props) {
  return (
    <div>
      <Gradient>
        <div className="container-fluid" style={{ height: '100%', width: '95%', display: 'block', margin: '0 auto', textAlign: 'center', fontSize: '16px' }}>
            <div className="row" style={{ marginTop: '5%', padding: '2%', paddingBottom: '2%'}}>
              <p style={{ textAlign: 'center', fontSize: '26px', fontWeight: 'bold', textTransform: 'uppercase' }}>How Eventmakr Works</p>
              <div>
                <div className="col-md-4" >
                  <img src={Vendors} alt="vendors" style={{ padding: '5%', width: '40%'}} />
                  <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Find local vendors</p>
                  <p style={{ fontSize: '14px', marginTop: '6%' }}>Browse caterers, food trucks, party rentals, and other vendors for your event. <a href="/vendors" style={{ textDecoration: 'underline', color: 'black' }}>Search</a> by occasion, date, and location.</p>
                </div>
              </div>
                <div className="col-md-4" >
                  <img src={Chat} alt="chat" style={{ padding: '5%', width: '40%'}} />
                  <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Customize and confirm orders via chat</p>
                  <p style={{ fontSize: '14px', marginTop: '6%' }}>Once you place an order, the vendor has 24 hours to respond. Special requests and modifications are easy to make via <a href="/messages" style={{ textDecoration: 'underline', color: 'black' }}>chat</a>.</p>
                </div>
                <div className="col-md-4">
                  <img src={Payment} alt="payment" style={{ padding: '5%', width: '40%'}} />
                  <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Pay with one click</p>
                  <p style={{ fontSize: '14px', marginTop: '6%' }}>Check the <a href="/orders" style={{ textDecoration: 'underline', color: 'black' }}>orders</a> page to see the status of your order requests at any time. When all orders are confirmed, you can finalize payment in one click!</p>
                </div>
            </div>
            <Button onClick={props.handleClickParty}>Get Started</Button>
        </div>
      </Gradient>
      <div style={{ display: 'block', margin: '0 auto', paddingTop: '1%', marginTop: '4%' }}>
        <div style={{ display: 'inline-flex', marginLeft: '40%' }}>
          <a href="https://www.facebook.com/Eventmakrr-1805055613100638/" target="blank"><img src={Facebook} style={{ marginTop: '13%', width: '40px', height: '40px', padding: '.5em'}} /></a>
          <a href="https://www.instagram.com/eventmakrr/" target="blank"><img src={Instagram} style={{ width: '50px', height: '50px', padding: '.5em'}} /></a>
        </div>
        <p style={{ textAlign: 'center', fontSize: '12px' }}>Questions? Contact Us: subscriptions@eventmakr.com</p>
        <p style={{ textAlign: 'center', fontSize: '12px' }}>Copyright 2017 Eventmakr</p>
      </div>
    </div>

  );
}

export default About;
