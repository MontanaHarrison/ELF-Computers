import React from 'react';
import Inputs from './Inputs.js'
import slugify from 'slugify';

function Options (props) {

  return (
    <div>
    <Inputs 
    
            itemHash={props.itemHash} 
            slugify={props.slugify} 
            item={props.item} 
            selected={props.selected} 
            feature={props.feature} 
            USCurrencyFormat={props.USCurrencyFormat} 
            update={props.updateFeature} 
            key={props.idx} />
    
    <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {props.options}
        </fieldset>
    </div>
  )
}

export default Options;