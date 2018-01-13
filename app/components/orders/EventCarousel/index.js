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
import ArrowRight from 'components/orders/ArrowRight';
import ArrowLeft from 'components/orders/ArrowLeft';
import styled from 'styled-components';

const StyledArrowLeft = styled(ArrowLeft)`
  position: absolute;
  margin-top: 12%;
  margin-right: 5%;
`;

const StyledArrowRight = styled(ArrowRight)`

`;


class EventCarousel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <StyledArrowRight />,
      prevArrow: <StyledArrowLeft />,
    };
    return (
     <div style={{ textAlign: 'center', marginTop: '2em', height: '10em' }}>
       <Slider {...settings}>
        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={PartyHat} alt="partyhat" style={{ paddingRight: '1em' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h3 style={{ fontWeight: 'bold' }}>March 6, 2017</h3>
            <h5 style={{ textTransform: 'uppercase' }}>Birthday</h5>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={Streamers} alt="partyhat" style={{ paddingRight: '1em' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h3 style={{ fontWeight: 'bold' }}>February 28, 2017</h3>
            <h5 style={{ textTransform: 'uppercase' }}>Office Party</h5>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={Dance} alt="partyhat" style={{ paddingRight: '1em' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h3 style={{ fontWeight: 'bold' }}>April 1, 2017</h3>
            <h5 style={{ textTransform: 'uppercase' }}>Just Because</h5>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={KidBday} alt="partyhat" style={{ paddingRight: '1em' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h3 style={{ fontWeight: 'bold' }}>March 11, 2017</h3>
            <h5 style={{ textTransform: 'uppercase' }}>Kid Birthday</h5>
          </div>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <img src={BabyShower} alt="partyhat" style={{ paddingRight: '1em' }} />
          </div>
          <div style={{ display: 'inline-block' }}>
            <h3 style={{ fontWeight: 'bold' }}>March 17, 2017</h3>
            <h5 style={{ textTransform: 'uppercase' }}>Baby Shower</h5>
          </div>
        </div>
      </Slider>

      </div>
    );
  }
}

export default EventCarousel;
