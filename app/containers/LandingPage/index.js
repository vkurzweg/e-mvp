/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Confetti from 'react-confetti';
import Wrapper from './Wrapper';
import { push } from 'react-router-redux';
import MediaQuery from 'react-responsive';
import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';
import E from 'assets/images/E_50vb.png';
import SearchFormWebLanding from 'components/landing/SearchFormWebLanding';
import SearchFormMobileLanding from 'components/landing/SearchFormMobileLanding';
import TextWeb from 'components/landing/TextWeb';
import TextMobile from 'components/landing/TextMobile';
import Button from './Button';
import selectLandingPage from './selectors';
import $ from 'jquery';
import moment from 'moment';
import NavLandingWeb from 'components/landing/NavLandingWeb';
import NavLandingMobile from 'components/landing/NavLandingMobile';
import LinksMobile from 'components/landing/LinksMobile';
import { browserHistory } from 'react-router';
import About from 'components/landing/About';
import AboutMobile from 'components/landing/AboutMobile';
// import ReactPlayer from 'react-player';
import Background from 'assets/images/background_festival.jpg';
import CarouselContainer from './CarouselContainer';
import CarouselContainerMobile from './CarouselContainerMobile';
import RaisedButton from 'material-ui/RaisedButton';
import FeaturedVendors from 'components/landing/FeaturedVendors';
import FeaturedVendorsMobile from 'components/landing/FeaturedVendorsMobile';
import MobileTopNavLanding from 'components/landing/MobileTopNavLanding';
import Helmet from 'react-helmet';



export class LandingPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isConfettiActive: true,
    };
    this.handleFeaturedClick = this.handleFeaturedClick.bind(this)
  }

  componentWillMount() {
    this.auth = this.props.route.auth;
  }

  componentDidMount() {
    this.props.fetchFeaturedVendors()
  }

  handleClickParty() {
    browserHistory.push('/vendors');
  }

  handleCTAClick() {
    browserHistory.push('/#about')
  }

  handleFeaturedClick(id, category, e) {
    this.props.goToVendor(`/vendors/${category}/${id}`)
  }

  goToLogin() {
    browserHistory.push('/login');
  }

  render() {
    const isConfettiActive = this.state.isConfettiActive;

    let confetti = null;
    if (isConfettiActive) {
      confetti = <Confetti />;
    } else {
      confetti = null;
    }

    return (
      <div>
        <Helmet>
          <title>Eventmakr - A New Marketplace for Event Planning</title>
          <meta name="description" content="Eventmakr is a new ordering platform for all party and event essentials. Find caterers, food trucks, party rentals and other local vendors." />
        </Helmet>
        <MediaQuery minWidth={768}>
          <NavLandingWeb
            login={this.goToLogin}
          />
          <CarouselContainer
            handleCTAClick={this.handleCTAClick}
          />
          <div className="container-fluid" style={{ marginTop: '-8%', paddingTop: '2%' }}>
            <div className="row" style={{ margin: '0 auto', display: 'inline-flex', width: '100%' }}>
              <SearchFormWebLanding
                setOccasion={this.props.setOccasion}
                occasion={this.props.occasion}
                setDate={this.props.setDate}
                startDate={this.props.startDate}
                setZip={this.props.setZip}
                zipCode={this.props.zipCode}
                handleClickParty={this.handleClickParty}
              />
            </div>
            <hr style={{ width: '50%', margin: '0 auto', marginBottom: '5%' }} />
            <FeaturedVendors
              featuredVendors={this.props.featuredVendors}
              onFeaturedClick={this.handleFeaturedClick}/>
          </div>
          <About
            handleClickParty={this.handleClickParty}
          />
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <MobileTopNavLanding />
          <CarouselContainerMobile
            handleCTAClick={this.handleCTAClick}
          />
          <SearchFormMobileLanding
            setOccasion={this.props.setOccasion}
            occasion={this.props.occasion}
            setDate={this.props.setDate}
            startDate={this.props.startDate}
            setZip={this.props.setZip}
            zipCode={this.props.zipCode}
            handleClickParty={this.handleClickParty}
          />
          <hr style={{ marginTop: '.5em' }} />
          <FeaturedVendorsMobile
            featuredVendors={this.props.featuredVendors}
            onFeaturedClick={this.handleFeaturedClick}/>
          <hr style={{ width: '50%', margin: '0 auto', marginTop: '.5em' }} />
          <AboutMobile
            handleClickParty={this.handleClickParty}
          />
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = selectLandingPage();

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

LandingPage.propTypes = {
  route: PropTypes.object,
  setOccasion: React.PropTypes.func,
  occasion: React.PropTypes.string,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

// <ReactPlayer
//   url='https://vimeo.com/206133681'
//   playing='true'
//   loop='true'
//   width='100%'
//   height='550px'
//   style={{ zIndex: '-100' }}
//   vimeoConfig={{ preload: true, iframeParams: {byline: false, width: '100%', height: '100%', loop: true, portrait: false, title: false} }}
// />

    // $('canvas').fadeOut(10000);

    // <MediaQuery maxWidth={768} minWidth={600}>
    //   <NavLandingMobile />
    //   <div style={{ position: 'relative', marginBottom: '4em' }}>
    //     <TextMobile />
    //     <SearchFormMobileLanding
    //       setOccasion={this.props.setOccasion}
    //       occasion={this.props.occasion}
    //       setDate={this.props.setDate}
    //       startDate={this.props.startDate}
    //       setZip={this.props.setZip}
    //       zipCode={this.props.zipCode}
    //     />
    //   </div>
    //   <Button className="btn btn-default" onClick={this.handleClickParty} style={{ marginTop: '-2em', marginLeft: '33%' }} >Find Vendors</Button>
    //   <AboutMobile />
    // </MediaQuery>

    // <MediaQuery maxWidth={600}>
    //   <NavLandingMobile />
    //   <div style={{ position: 'relative', marginBottom: '4em' }}>
    //     <TextMobile />
    //     <SearchFormMobileLanding
    //       setOccasion={this.props.setOccasion}
    //       occasion={this.props.occasion}
    //       setDate={this.props.setDate}
    //       startDate={this.props.startDate}
    //       setZip={this.props.setZip}
    //       zipCode={this.props.zipCode}
    //     />
    //   </div>
    //   <Button className="btn btn-default" onClick={this.handleClickParty} style={{ marginTop: '-2em', marginLeft: '17%' }} >Make an Event</Button>
    //   <AboutMobile />
    // </MediaQuery>

