import React, { PropTypes } from 'react';
import CategoryMobile from 'components/vendorsMain/CategoryMobile';
import CategoryGridMobile from 'components/vendorsMain/CategoryGridMobile';


function CategoryGroupMobile(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="row">
      {props.group.map( (category, idx) => {
        return <CategoryGridMobile
          onCategoryClick={props.onCategoryClick}
          key={idx}
          src={category.src}
          categoryName={category.categoryName}
          comingSoon={category.isEmpty}
          alt={category.alt}
          dataUrl={category.url}
        />
      })}
    </div>
  );
}

CategoryGroupMobile.propTypes = {
  group: PropTypes.array,
  onCategoryClick: PropTypes.func,
};

export default CategoryGroupMobile;
