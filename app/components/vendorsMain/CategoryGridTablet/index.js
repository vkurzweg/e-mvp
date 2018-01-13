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
        key={props.key}
        title={props.categoryName}
        subtitle={subtitle}
        style={{ width: '80%', minWidth: '200px', height: '200px', transform: 'initial', marginBottom: '15px', cursor: 'pointer' }}
        titleStyle={{ width: '100%', height: '100%', textTransform: 'uppercase' }}
      >
        <img src={image} data={props.dataUrl} />
      </GridTile>
    </div>
  );
}

export default CategoryGrid;
