/**
*
* CategoryGrid
*
*/

import React from 'react';
import { GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';


function CategoryGrid(props) {
  let image = props.src
  if (!image) image = 'http://placehold.it/350x250'
  let display;
  let comingSoon = props.comingSoon;
  comingSoon ? display = 'block' : display = 'none';
  let subtitle = <p style={{ display }}>Coming Soon!</p>
  return (
    <div onClick={props.onCategoryClick.bind(this, props.dataUrl, props.categoryName)}>
      <GridTile
        title={props.categoryName}
        subtitle={subtitle}
        style={{ width: '90%', maxWidth: '210px', height: '190px', transform: 'initial', marginBottom: '15px', cursor: 'pointer', marginRight: '15px' }}
        titleStyle={{ width: '100%', height: '100%', textTransform: 'uppercase' }}
      >
        <img src={image} alt={props.alt} />
      </GridTile>
    </div>
  );
}

export default CategoryGrid;
