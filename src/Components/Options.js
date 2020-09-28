import React from 'react';
import Inputs from './Inputs.js'

function Options (props) {

  return (
    <div>
    <Inputs itemHash={itemHash} slugify={slugify} item={item} selected={this.state.selected} feature={feature} USCurrencyFormat={USCurrencyFormat} update={this.updateFeature} key={this.idx} />
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