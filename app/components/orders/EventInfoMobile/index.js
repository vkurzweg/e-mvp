/**
*
* EventInfo
*
*/

import React from 'react';
import PartyHat from 'assets/images/partyhat_jordy.png';
import { Line } from 'rc-progress';
import moment from 'moment';
import Button from './Button';
import Party from 'assets/images/party_supplies-min.png';


function EventInfo(props) {
  // leave fields blank if there is no event
  let eventDate = '';
  let eventOccasion = '';
  let eventAddress = '';
  let eventCity = '';
  console.log('props.event', props.event)
  if (props.event.date !== '') eventDate = moment(props.event.date).format('MM/DD/YYYY');
  if (props.event !== null) eventOccasion = props.event.occasion;
  if (props.event !== null) eventAddress = props.event.location.address;
  if (props.event !== null) eventCity = props.event.location.city;
  console.log('eventDate', eventDate)
  // order confirmation progress bar:
  let orders = [];
  if (props.event !== null) orders = props.event.orders;
  let ordersNum = orders.length;
  let responded = [];
  orders.map((order, idx, orders) => {
    if (order.status === 'ACCEPTED' || order.status === 'DECLINED') responded.push(order)
  });
  let respondedNum = responded.length;
  let percent = Math.floor((respondedNum / ordersNum) * 100);
  // only display progress bar if there are orders
  let displayBar = 'block';
  if (props.event.orders.length === 0) displayBar = 'none';
  let displayEmpty = 'none';
  if (props.event.date === "") displayEmpty = 'block'
  let displayEvent = 'inline-block'
  if (props.event.date === "") displayEvent = 'none'
  return (
    <div>

      <div className="container" style={{ backgroundImage: `url(${Party})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '20%', marginTop: '0', padding: '5%' }}>
        <div className="row" style={{ textAlign: 'center', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '5px', width: '80%', padding: '8%', paddingBottom: '4%', color: '#FAFAFA', marginTop: '2%', marginBottom: '2%' }}>
          <div style={{ display: displayEvent }}>
            <div style={{ display: 'inline-block' }}>
              <img src={PartyHat} alt="partyhat" style={{ marginTop: '-50%' }} />
            </div>
            <div style={{ display: 'inline-block' }}>
              <h4 style={{ fontWeight: 'bold' }}>{eventDate}</h4>
              <h5 style={{ textTransform: 'uppercase' }}>{eventOccasion}</h5>
              <h5>{eventAddress}, {eventCity}</h5>
            </div>
          </div>
        </div>
      </div>

        <div style={{ display: displayBar, width: '90%', margin: '0 auto', marginTop: '4%' }}>
          <h5 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px' }}>Vendors have responded to {percent}% of your order requests.</h5>
          <Line percent={percent} strokeWidth="2" strokeColor="#75B2DF" style={{ width: '100%' }} />
          <p style={{ fontSize: '12px', fontStyle: 'italic', textAlign: 'center', paddingTop: '1em' }}>Once all vendors confirm/decline orders, you can book your event!</p>
          <hr style={{ width: '60%', margin: '0 auto', marginTop: '4%', marginBottom: '4%'}} />
        </div>

      <div style={{ display: displayEmpty }}>
        <p style={{ textAlign: 'center', marginTop: '10%' }}>You have no orders. Create an event to start placing them!</p>
        <Button className="btn btn-success" onClick={props.onCreateEvent}>Create a new event</Button>
      </div>

    </div>
  );
}

export default EventInfo;

// <p style={{ cursor: 'pointer', color: '#5975BB' }}>Edit Event Info</p>

