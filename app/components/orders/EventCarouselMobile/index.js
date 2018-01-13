/**
*
* EventCarousel
*
*/

import React from 'react';
import PartyHat from 'assets/images/partyhat.png';
import Streamers from 'assets/images/streamers.png';
import Dance from 'assets/images/dance.png';
import BabyShower from 'assets/images/babyshower.png';
import KidBday from 'assets/images/kidbday.png';
import Slider from 'react-slick';
import 'slick-carousel';
import ArrowRightMobile from 'components/orders/ArrowRightMobile';
import ArrowLeftMobile from 'components/orders/ArrowLeftMobile';


class EventCarousel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <ArrowRightMobile />,
      prevArrow: <ArrowLeftMobile />,
    };
    return (
     <div style={{ textAlign: 'center', marginTop: '2em', height: '10em' }}>
       <Slider {...settings}>
        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={PartyHat} alt="partyhat" style={{ paddingRight: '1em', width: '75%' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h5 style={{ fontWeight: 'bold' }}>March 6, 2017</h5>
            <p style={{ textTransform: 'uppercase' }}>Birthday</p>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={Streamers} alt="partyhat" style={{ paddingRight: '1em', width: '75%' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h5 style={{ fontWeight: 'bold' }}>February 28, 2017</h5>
            <p style={{ textTransform: 'uppercase' }}>Office Party</p>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={Dance} alt="partyhat" style={{ paddingRight: '1em', width: '75%' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h5 style={{ fontWeight: 'bold' }}>April 1, 2017</h5>
            <p style={{ textTransform: 'uppercase' }}>Just Because</p>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={KidBday} alt="partyhat" style={{ paddingRight: '1em', width: '75%' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h5 style={{ fontWeight: 'bold' }}>March 11, 2017</h5>
            <p style={{ textTransform: 'uppercase' }}>Kid Birthday</p>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={BabyShower} alt="partyhat" style={{ paddingRight: '1em', width: '75%' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h5 style={{ fontWeight: 'bold' }}>March 17, 2017</h5>
            <p style={{ textTransform: 'uppercase' }}>Baby Shower</p>
          </div>
        </div>
      </Slider>

      </div>
    );
  }
}

export default EventCarousel;
