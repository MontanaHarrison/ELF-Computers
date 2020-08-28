import React from 'react';

function Options (props) {
  return (
    <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {props.options}
        </fieldset>
  )
}

export default Options;