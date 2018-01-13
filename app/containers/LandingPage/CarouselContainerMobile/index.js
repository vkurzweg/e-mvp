/*
 *
 * CarouselContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel';
import Kids from 'assets/images/birthday_kids.jpg';
import Table from 'assets/images/table_food.jpg';
import Cocktail from 'assets/images/cocktail.jpg';
import Corporate from 'assets/images/corporate_party.jpg';
import TextWeb from 'components/landing/TextWeb';
import TextWeb2Mobile from 'components/landing/TextWeb2Mobile';
import TextWeb3 from 'components/landing/TextWeb3';


export class CarouselContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isShowing: true,
    };
    this.hideCTA = this.hideCTA.bind(this);
  }

  hideCTA() {
    this.setState((prevState) => {
      return { isShowing: !prevState.isShowing };
    });
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      arrows: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div style={{ height: '200px', backgroundImage: `url(${Table})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <TextWeb2Mobile
              handleClickParty={this.props.handleCTAClick}
              hideCTA={this.hideCTA}
              isShowing={this.state.isShowing}
            />
          </div>
          <div style={{ height: '200px', backgroundImage: `url(${Kids})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <TextWeb2Mobile
              handleClickParty={this.props.handleCTAClick}
              hideCTA={this.hideCTA}
              isShowing={this.state.isShowing}
            />
          </div>
          <div style={{ height: '200px', backgroundImage: `url(${Cocktail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <TextWeb2Mobile
              handleClickParty={this.props.handleCTAClick}
              hideCTA={this.hideCTA}
              isShowing={this.state.isShowing}
            />
          </div>
          <div style={{ height: '200px', backgroundImage: `url(${Corporate})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <TextWeb2Mobile
              handleClickParty={this.props.handleCTAClick}
              hideCTA={this.hideCTA}
              isShowing={this.state.isShowing}
            />
          </div>
        </Slider>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(CarouselContainer);
