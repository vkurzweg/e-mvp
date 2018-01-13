import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import SearchFormWeb from 'components/search/SearchFormWeb';
import SearchFormWebNoIcons from 'components/search/SearchFormWebNoIcons';
import MediaQuery from 'react-responsive';
import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';
import NavMobile from 'components/common/NavMobile';
import NavTablet from 'components/common/NavTablet';
import NavWeb from 'components/common/NavWeb';
import { push } from 'react-router-redux';
import CategoryContainerWeb from 'components/vendorsMain/CategoryContainerWeb';
import CategoryContainerMobile from 'components/vendorsMain/CategoryContainerMobile';
import CategoryContainerTablet from 'components/vendorsMain/CategoryContainerTablet';
import SearchResults from 'components/search/SearchResults';
import selectVendorsPage from './selectors';
import moment from 'moment';
import MobileTopNav from 'components/common/MobileTopNav';
import TabletTopNav from 'components/common/TabletTopNav';
import BottomNavContainer from '../BottomNavContainer';
import NavWebContainer from '../NavWebContainer';
import StepperContainer from '../StepperContainer';
import StepperContainerMobile from '../StepperContainerMobile';
import StepperContainerTablet from '../StepperContainerTablet';
import Paper from 'material-ui/Paper';


export class VendorsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 0,
    }
    this.handleMobileNav = this.handleMobileNav.bind(this)
  }
  componentDidMount() {
    this.props.fetchVendors();
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Eventmakr - Caterers, Food Trucks, Party Rentals & More"
          meta={[
            { name: 'description', content: 'Eventmakr is a new a marketplace for communities to order all essentials for parties and events.' },
          ]}
        />
        <MediaQuery minWidth={768}>
          <NavWebContainer />
          <div style={{ display: 'block', width: '100%', margin: '0 auto'}}>
              <StepperContainer
                stepIndex={this.state.stepIndex}
                />
              <SearchFormWeb
                setOccasion={this.props.setOccasion}
                occasion={this.props.occasion}
                setDate={this.props.setDate}
                startDate={this.props.startDate}
                setZip={this.props.setZip}
                zipCode={this.props.zipCode}
              />
            <CategoryContainerWeb
              occasion={this.props.occasion}
              setVendorCategory={this.props.setVendorCategory}
              getCategories={this.props.moveLocation}
              fetchVendors={this.props.fetchVendors}
            />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={481} maxWidth={767}>
          <TabletTopNav
            setOccasion={this.props.setOccasion}
            occasion={this.props.occasion}
            setDate={this.props.setDate}
            startDate={this.props.startDate}
            setZip={this.props.setZip}
            zipCode={this.props.zipCode}
          />
          <StepperContainerTablet
            stepIndex={this.state.stepIndex}
          />
          <div style={{ display: 'block', width: '100%', margin: '0 auto !important'}}>
            <CategoryContainerTablet
              occasion={this.props.occasion}
              setVendorCategory={this.props.setVendorCategory}
              getCategories={this.props.moveLocation}
              fetchVendors={this.props.fetchVendors} />
          </div>
          <NavTablet
            onClick={this.handleMobileNav} />
        </MediaQuery>

        <MediaQuery minWidth={0} maxWidth={480}>
          <MobileTopNav
            setOccasion={this.props.setOccasion}
            occasion={this.props.occasion}
            setDate={this.props.setDate}
            startDate={this.props.startDate}
            setZip={this.props.setZip}
            zipCode={this.props.zipCode}
          />
          <div style={{ display: 'block', width: '100%', margin: '0 auto'}}>
            <StepperContainerMobile
              stepIndex={this.state.stepIndex}
              />
            <CategoryContainerMobile
              occasion={this.props.occasion}
              setVendorCategory={this.props.setVendorCategory}
              getCategories={this.props.moveLocation}
              fetchVendors={this.props.fetchVendors} />
          </div>
          <NavMobile
            onClick={this.handleMobileNav} />
        </MediaQuery>

      </div>
    );
  }
}


const mapStateToProps = selectVendorsPage();

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actionCreators, dispatch),
    moveLocation: (url) => dispatch(push(url)),
  }
}

VendorsPage.propTypes = {
  setOccasion: React.PropTypes.func,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  moveLocation: React.PropTypes.func,
  setVendorCategory: React.PropTypes.func,
  fetchVendors: React.PropTypes.func,
  occasion: React.PropTypes.string,
  isFetchingVendors: React.PropTypes.bool,
  vendorsNum: React.PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorsPage);

// // <SearchResults
//   vendorsNum={this.props.vendorsNum}
//   isFetchingVendors={this.props.isFetchingVendors}

//   <div style={{ marginTop: '1em' }}>
//     <SearchResults
//       vendorsNum={this.props.vendorsNum}
//       isFetchingVendors={this.props.isFetchingVendors}
//     />
//   </div>
// />
