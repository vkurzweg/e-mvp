/**
*
* CategoryContainer
*
*/

import React from 'react';
import occasionCategories from 'data/categories_mobile';
import CategoryGroupMobile from 'components/vendorsMain/CategoryGroupMobile';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    textAlign: 'center',
    paddingTop: '2%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: '0 auto',
  },
  gridList: {
    margin: '0 auto',
    marginLeft: '5%',
    minWidth: '300',
    height: '100%',
    marginBottom: '10%',
    overflowY: 'auto',
    overflowX: 'auto',
  },
};

class CategoryContainerMobile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }

  handleCategoryClick(url, name, evt, action) {
    const category = name;
    const categoryUrl = url;
    this.props.setVendorCategory(category);
    this.props.getCategories(categoryUrl);
  }

  render() {
    let categories = occasionCategories.birthday;
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
    console.log('categories mobile', categories)
    return (
      <div className="container" style={styles.root}>
        <GridList
          cellHeight="160"
          style={styles.gridList}
          cols={2}
          padding={0}
        >
        { categories.map((group, idx, categories) => {
          return <CategoryGroupMobile
            key={idx + 1}
            id={idx}
            group={group}
            onCategoryClick={this.handleCategoryClick}
            />
        })}
        </GridList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    occasion: state.get('search').get('occasion'),
  };
}

export default connect(mapStateToProps, null)(CategoryContainerMobile);
