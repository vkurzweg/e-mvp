/*
 *
 * CatNavContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectCatNavContainer from './selectors';
import occasionCategories from 'data/categoriesFull';
import { browserHistory } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};


export class CatNavContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { value: null };
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleNavClick(e) {
    e.preventDefault();
    const linkUrl = e.target.getAttribute('data-url');
    const category = e.target.getAttribute('data-name');
    this.props.setVendorCategory(category);
    browserHistory.push(linkUrl);
  }

  handleChange(event, index, value) {
    const linkUrl = event.target.getAttribute('data-url');
    this.props.setVendorCategory(value);
    browserHistory.push(linkUrl);
  }

  render() {
    let categories = occasionCategories.default;
    switch (this.props.occasion) {
      case 'bday':
        categories = occasionCategories.birthday;
        break;
      case 'kidb':
        categories = occasionCategories.kidBirthday;
        break;
      case 'off':
        categories = occasionCategories.corporate;
        break;
      case 'bs':
        categories = occasionCategories.babyShower;
        break;
      default:
        categories = occasionCategories.default;
        break;
    }
    return (
      <div style={{ width: '150px', display: 'block', margin: '0 auto', verticalAlign: 'text-bottom', marginRight: '19%', marginTop: '-.5em' }}>
        <SelectField
          value={this.props.category}
          onChange={this.handleChange}
          hintText="Categories"
          maxHeight={300}
          textFieldStyle={{ display: 'block', margin: '0 auto', textAlign: 'center', textTransform: 'uppercase', width: '150px', marginRight: '5%' }}
          style={{ margin: '0 auto', display: 'block', textAlign: 'center', width: '150px' }}
        >
        { categories.map((category, idx, categories) => {
          return <MenuItem
            key={idx+1}
            value={category.categoryName}
            primaryText={category.categoryName}
            dataUrl={category.url}
            handleClick={this.handleNavClick}
            style={styles.customWidth}
          />
        })}
        </SelectField>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    occasion: state.get('search').get('occasion'),
    // TODO: Map to Redux
    categoryName: 'Catering',
  };
}

export default connect(mapStateToProps, null)(CatNavContainer);
