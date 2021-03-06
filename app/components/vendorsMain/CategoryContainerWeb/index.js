/**
*
* CategoryContainer
*
*/

import React from 'react';
import CategoryGroup from 'components/vendorsMain/CategoryGroup';
import occasionCategories from 'data/categories';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import Prefixer from 'inline-style-prefixer'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '0',
    paddingBottom: '158%',
    textAlign: 'center',
    paddingTop: '2%',
    width: '80%',
    margin: '0 auto',
    minWidth: '620',
  },
  gridList: {
    width: '85%',
    height: '1250',
    margin: '0 auto',
    paddingLeft: '2%',
    overflowY: 'auto',
    overflowX: 'auto',
  },
};

const prefixer = new Prefixer()
const prefixedStyle = prefixer.prefix(styles)

class CategoryContainerWeb extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
    // TODO: REFACTOR THIS INTO FUNCTION IN A FILE
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
    return (
      <div style={styles.root}>
        <GridList
          cellHeight="200"
          style={styles.gridList}
          cols={3}
          padding={0}
        >
        { categories.map((group, idx, categories) => {
          return <CategoryGroup
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

export default CategoryContainerWeb;
