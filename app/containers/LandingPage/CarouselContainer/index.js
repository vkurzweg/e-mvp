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
import TextWeb2 from 'components/landing/TextWeb2';
import TextWeb2Large from 'components/landing/TextWeb2Large';
import MediaQuery from 'react-responsive';


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
    };
    return (
      <div>
        <MediaQuery minWidth={1824}>
          <Slider {...settings}>
            <div style={{ height: '500px', backgroundImage: `url(${Table})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2Large
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
            <div style={{ height: '500px', backgroundImage: `url(${Kids})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2Large
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
            <div style={{ height: '500px', backgroundImage: `url(${Cocktail})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2Large
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
            <div style={{ height: '500px', backgroundImage: `url(${Corporate})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2Large
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
          </Slider>
        </MediaQuery>
        <MediaQuery maxWidth={1823}>
          <Slider {...settings}>
            <div style={{ height: '450px', backgroundImage: `url(${Table})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
            <div style={{ height: '450px', backgroundImage: `url(${Kids})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
            <div style={{ height: '450px', backgroundImage: `url(${Cocktail})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
            <div style={{ height: '450px', backgroundImage: `url(${Corporate})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <TextWeb2
                handleClickParty={this.props.handleCTAClick}
                hideCTA={this.hideCTA}
                isShowing={this.state.isShowing}
              />
            </div>
          </Slider>
        </MediaQuery>
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
