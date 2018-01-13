/*
 *
 * CatNavContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
// import selectCatNavContainer from './selectors';
import CatNavItem from 'components/vendorsCategory/CatNavItem';
import occasionCategories from 'data/categoriesFull';
import { browserHistory } from 'react-router';


export class CatNavContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(e) {
    e.preventDefault();
    const linkUrl = e.target.getAttribute('data-url');
    const category = e.target.getAttribute('data-name');
    this.props.setCategory(category);
    browserHistory.push(linkUrl);
  }

  render() {
    let categories = occasionCategories.default;
    switch (this.props.occasion) {
      case 'Birthday':
        categories = occasionCategories.birthday;
        break;
      case 'Kid Birthday':
        categories = occasionCategories.kidBirthday;
        break;
      case 'Office Party':
        categories = occasionCategories.corporate;
        break;
      case 'Baby Shower':
        categories = occasionCategories.babyShower;
        break;
      default:
        categories = occasionCategories.default;
        break;
    }
    return (
      <div className="col-xs-2" style={{ marginLeft: '8%' }}>
        <h4 style={{ fontSize: '12px', fontWeight: 'bold', marginLeft: '1em' }}></h4>
        { categories.map((category, idx, categories) => {
          return <CatNavItem
            key={idx+1}
            categoryName={category.categoryName}
            dataUrl={category.url}
            handleClick={this.handleNavClick}
          />
        })}
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
