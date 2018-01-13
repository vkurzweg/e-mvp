import React, { PropTypes } from 'react';
import CategoryWeb from 'components/vendorsMain/CategoryWeb';
import CategoryGrid from 'components/vendorsMain/CategoryGrid';


function CategoryGroup(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <div className="row">
      {props.group.map( (category, idx) => {
        return <CategoryGrid
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

CategoryGroup.propTypes = {
  group: PropTypes.array,
  onCategoryClick: PropTypes.func,
};

export default CategoryGroup;
