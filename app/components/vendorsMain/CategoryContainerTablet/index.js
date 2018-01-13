import React from 'react';
import CategoryGroupTablet from 'components/vendorsMain/CategoryGroupTablet';
import occasionCategories from 'data/categories';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';

const styles = {
  root: {
    height: '0',
    paddingBottom: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    textAlign: 'center',
    margin: '0 auto',
    paddingTop: '2%',
    marginBottom: '10%',
    minWidth: '620',
    width: '80%',
  },
  gridList: {
    width: '65%',
    minWidth: '405',
    minHeight: '1450',
    height: '1450',
    marginBottom: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowY: 'auto',
    overflowX: 'auto',
  },
};

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
          cellHeight="25%"
          style={styles.gridList}
          cols={2}
          padding={0}
        >
        { categories.map((group, idx, categories) => {
          return <CategoryGroupTablet
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
