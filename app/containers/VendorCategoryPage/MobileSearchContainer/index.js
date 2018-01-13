/*
 *
 * MobileSearchContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import SearchFormMobile from 'components/search/SearchFormMobile';

export class MobileSearchContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showSearch: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  toggleSearch() {
    this.setState((prevState) => {
      return { showSearch: !prevState.showSearch };
    });
  }

  render() {
    return (
      <div>
        <SearchFormMobile
          toggleSearch={this.toggleSearch}
          showSearch={this.state.showSearch}
          setOccasion={this.props.setOccasion}
          occasion={this.props.occasion}
          setDate={this.props.setDate}
          startDate={this.props.startDate}
          setZip={this.props.setZip}
          zipCode={this.props.zipCode}
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

MobileSearchContainer.propTypes = {
  setOccasion: React.PropTypes.func,
  selectValue: React.PropTypes.object,
  setDate: React.PropTypes.func,
  startDate: React.PropTypes.object,
  setZip: React.PropTypes.func,
  zipCode: React.PropTypes.string,
  setLocation: React.PropTypes.func,
  occasion: React.PropTypes.string,
};

export default connect(null, mapDispatchToProps)(MobileSearchContainer);
