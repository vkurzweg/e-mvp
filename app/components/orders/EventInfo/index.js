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
import Dance from 'assets/images/dance_jordy.png';
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
  let displayBar = 'inline-block';
  if ((props.event.orders.length === 0) || (props.event.status === 'CONFIRMED')) displayBar = 'none';
  let displayEmpty = 'none';
  if (props.event.date === "") displayEmpty = 'block'
  let displayEvent = 'inline-block'
  if (props.event.date === "") displayEvent = 'none'
  let displayConfirmed;
  (props.event.status === 'CONFIRMED') ? displayConfirmed = 'inline-block' : displayConfirmed = 'none';
  return (
    <div>
      <div className="container" style={{ backgroundImage: `url(${Party})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '30%', marginTop: '0' }}>
        <div className="row" style={{ textAlign: 'center', margin: '0 auto', backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '5px', width: '80%', padding: '3%', color: '#FAFAFA', marginTop: '2%', marginBottom: '2%' }}>
          <div style={{ display: 'block', margin: '0 auto'}}>
            <div style={{ display: displayEvent }}>
              <div style={{ display: 'inline-block' }}>
                <img src={PartyHat} alt="partyhat" style={{ marginTop: '-20%', paddingRight: '1em' }} />
              </div>
              <div style={{ display: 'inline-block' }}>
                <h3 style={{ fontWeight: 'bold' }}>{eventDate}</h3>
                <h5 style={{ textTransform: 'uppercase' }}>{eventOccasion}</h5>
                <h5>{eventAddress}, {eventCity}</h5>
              </div>
            </div>
            <div style={{ display: displayBar, paddingLeft: '5%' }}>
              <h5 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '18px' }}>Vendors have responded to {percent}% of your order requests.</h5>
              <Line percent={percent} strokeWidth="2" strokeColor="#75B2DF" style={{ width: '100%' }} />
              <p style={{ fontSize: '12px', fontStyle: 'italic', textAlign: 'center', paddingTop: '1em' }}>Once all vendors confirm or decline orders, you can book your event!</p>
            </div>
          </div>
          <div style={{ display: displayConfirmed }}>
            <div style={{ display: 'inline-flex', width: '20em', margin: '0 auto', padding: '2%', marginLeft: '30%'}}>
              <img src={Dance} alt="dance icon" style={{ display: 'block', margin: '0 auto'}} />
              <p style={{ textAlign: 'center', marginTop: '10%'}}>This event has been booked! <br /> All orders are paid.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: displayEmpty }}>
        <p style={{ textAlign: 'center', marginTop: '10%' }}>You have no orders. Create an event to start placing them!</p>
        <Button onClick={props.onCreateEvent} className="btn btn-success">Create a new event</Button>
      </div>
    </div>

  );
}

export default EventInfo;

// <p style={{ cursor: 'pointer', color: '#5975BB' }}>Edit Event Info</p>

