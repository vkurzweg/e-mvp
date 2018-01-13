/*
 *
 * VendorCategoryPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import selectVendorCategoryPage from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import SearchFormWeb from 'components/search/SearchFormWeb';
import SearchFormWebNoIcons from 'components/search/SearchFormWebNoIcons';
import MediaQuery from 'react-responsive';
import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';
import NavMobile from 'components/common/NavMobile';
import NavTablet from 'components/common/NavTablet';
import NavWebContainer from '../NavWebContainer';
import { push } from 'react-router-redux';
import Slider from 'components/vendorsCategory/Slider';
import SliderMobile from 'components/vendorsCategory/SliderMobile';
import SliderTablet from 'components/vendorsCategory/SliderTablet';
import selectVendorCategoryPage from './selectors';
import moment from 'moment';
import CategoryHeader from 'components/vendorsCategory/CategoryHeader';
import CategoryHeaderMobile from 'components/vendorsCategory/CategoryHeaderMobile';
import VendorContainerGrid from './VendorContainerGrid';
import VendorContainerGridMobile from './VendorContainerGridMobile';
import VendorContainerGridTablet from './VendorContainerGridTablet';
import CatNavContainer from './CatNavContainer';
import CatNavContainerTablet from './CatNavContainerTablet';
import CatNavContainerMobile from './CatNavContainerMobile';
import MapContainer from './MapContainer';
import MapContainerTablet from './MapContainerTablet';
import MapContainerMobile from './MapContainerMobile';
import { toJS } from 'immutable';
import MobileTopNav from 'components/common/MobileTopNav';
import TabletTopNav from 'components/common/TabletTopNav';
import Loading from 'react-loading';
import StepperContainer from '../StepperContainer';
import StepperContainerMobile from '../StepperContainerMobile';
import StepperContainerTablet from '../StepperContainerTablet';



export class VendorCategoryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 1,
    }
    this.handleMobileNav = this.handleMobileNav.bind(this)
  }

  handleMobileNav(url, e) {
    this.props.moveLocation(url);
  }

  componentDidMount() {
    console.log('component did mount')
    const currentLocation = window.location.pathname;
    console.log('curr location:', currentLocation)
    this.props.setLocation(currentLocation);
    const category = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);
    this.props.setVendorCategory(category);
    this.props.fetchVendors();
  }


  render() {
    let vendorsGrid = <Loading type='bubbles' style={{ display: 'block', margin: '0 auto' }} />
    if (!this.props.isFetchingVendors && this.props.vendors) {
      vendorsGrid = <VendorContainerGrid
        setVendor={this.props.setVendor}
        getVendors={this.props.goToVendor}
        vendors={this.props.vendors}
        location={this.props.location}
        setVendorKey={this.props.setVendorKey}
        isFetchingVendors={this.props.isFetchingVendors}
      />
    }
    return (
      <div>
        <Helmet
          title="VendorCategoryPage"
          meta={[
            { name: 'Eventmakr - Vendors by Category', content: 'Find caterers, florists, bakeries, and other vendors for your next special occasion. Eventmakr is a one-stop shop for event planning.' },
          ]}
        />

        <MediaQuery minWidth={768}>
          <NavWebContainer />
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
            <Slider
              budgetValues={this.props.budgetValues}
              setBudget={this.props.setBudgetSlider}
            />
            <CategoryHeader
              category={this.props.category}
            />
          <div className="container" style={{ display: 'block', margin: '0 auto' }} >
              <CatNavContainer setVendorCategory={this.props.setVendorCategory} />
              { vendorsGrid }
              <MapContainer
                vendors={this.props.vendors}/>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={481} maxWidth={767} >
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
            <CategoryHeader
              category={this.props.category}
            />
            <MapContainerTablet
              vendors={this.props.vendors}
            />
            <SliderTablet
              budgetValues={this.props.budgetValues}
              setBudget={this.props.setBudgetSlider}
            />
          <div className="container" style={{ display: 'block', margin: '0 auto' }} >
              <CatNavContainerTablet setVendorCategory={this.props.setVendorCategory} />
              <VendorContainerGridTablet
                setVendor={this.props.setVendor}
                getVendors={this.props.goToVendor}
                vendors={this.props.vendors}
                location={this.props.location}
                setVendorKey={this.props.setVendorKey}
                isFetchingVendors={this.props.isFetchingVendors}
              />
          </div>
          <NavTablet
            onClick={this.handleMobileNav}/>
        </MediaQuery>

        <MediaQuery maxWidth={480}>
          <MobileTopNav
            setOccasion={this.props.setOccasion}
            occasion={this.props.occasion}
            setDate={this.props.setDate}
            startDate={this.props.startDate}
            setZip={this.props.setZip}
            zipCode={this.props.zipCode}
          />
          <StepperContainerMobile
            stepIndex={this.state.stepIndex}
            />
          <div style={{ marginRight: '5%' }}>
            <CatNavContainerMobile
              category={this.props.category}
              setVendorCategory={this.props.setVendorCategory}
            />
          </div>
          <MapContainerMobile
            vendors={this.props.vendors}
          />
          <div style={{ paddingBottom: '7%'}}>
            <p style={{ textAlign: 'center', marginBottom: '-3%' }}>Filter by budget:</p>
            <SliderMobile
              budgetValues={this.props.budgetValues}
              setBudget={this.props.setBudgetSlider}
            />
          </div>
          <div style={{ marginRight: '1em', paddingBottom: '10%' }}>
            <VendorContainerGridMobile
              setVendor={this.props.setVendor}
              getVendors={this.props.goToVendor}
              vendors={this.props.vendors}
              location={this.props.location}
              setVendorKey={this.props.setVendorKey}
              isFetchingVendors={this.props.isFetchingVendors}
            />
          </div>
          <NavMobile
            onClick={this.handleMobileNav}/>
        </MediaQuery>

      </div>
    );
  }
}

const mapStateToProps = selectVendorCategoryPage();

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(actionCreators, dispatch),
    goToCategory: (slug) => dispatch(push(slug)),
    goToVendor: (slug) => dispatch(push(slug)),
    moveLocation: (url) => dispatch(push(url)),
  };
}

VendorCategoryPage.propTypes = {
  setOccasion: React.PropTypes.func,
  occasion: React.PropTypes.string,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  catTitle: React.PropTypes.string,
  setLocation: React.PropTypes.func,
  setBudgetSlider: React.PropTypes.func,
  setVendorCategory: React.PropTypes.func,
  fetchVendors: React.PropTypes.func,
  budgetValues: React.PropTypes.object,
  isFetchingVendors: React.PropTypes.bool,
  vendors: React.PropTypes.array,
  category: React.PropTypes.string,
  goToCategory: React.PropTypes.func,
  setVendor: React.PropTypes.func,
  goToVendor: React.PropTypes.func,
  location: React.PropTypes.string,
  setVendorKey: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(VendorCategoryPage);

// <MediaQuery minWidth={768} maxWidth={1029}>
//   <NavWeb />
//   <SearchFormWebNoIcons
//     setOccasion={this.props.setOccasion}
//     occasion={this.props.occasion}
//     setDate={this.props.setDate}
//     startDate={this.props.startDate}
//     setZip={this.props.setZip}
//     zipCode={this.props.zipCode}
//   />
//   <Slider
//     budgetValues={this.props.budgetValues}
//     setBudgetSlider={this.props.setBudgetSlider}
//   />
//   <div className="container">
//     <div className="row" style={{ display: 'block', margin: '0 auto' }}>
//       <CatNavContainerMobile
//         setVendorCategory={this.props.setVendorCategory}
//       />
//       <CategoryHeader
//         category={this.props.category}
//       />
//     </div>
//   </div>
//   <MapContainerMobile />
//   <VendorContainerGrid
//     setVendor={this.props.setVendor}
//     getVendors={this.props.goToVendor}
//     vendors={this.props.vendors}
//     location={this.props.location}
//     setVendorKey={this.props.setVendorKey}
//   />
// </MediaQuery>

// <MediaQuery maxWidth={767}>
//   <MobileTopNav
//     setOccasion={this.props.setOccasion}
//     occasion={this.props.occasion}
//     setDate={this.props.setDate}
//     startDate={this.props.startDate}
//     setZip={this.props.setZip}
//     zipCode={this.props.zipCode}
//   />
//   <div style={{ marginTop: '3em' }}>
//     <Slider
//       budgetValues={this.props.budgetValues}
//       setBudgetSlider={this.props.setBudgetSlider}
//     />
//   </div>
//   <div className="row" style={{ display: 'block', margin: '0 auto' }}>
//     <CategoryHeader
//       category={this.props.category}
//     />
//     <CatNavContainerMobile
//       setVendorCategory={this.props.setVendorCategory}
//     />
//   </div>
//   <MapContainerMobile />
//   <div style={{ marginRight: '1em' }}>
//     <VendorContainerGridMobile
//       setVendor={this.props.setVendor}
//       getVendors={this.props.goToVendor}
//       vendors={this.props.vendors}
//       location={this.props.location}
//       setVendorKey={this.props.setVendorKey}
//     />
//   </div>
//   <NavMobile />
// </MediaQuery>
