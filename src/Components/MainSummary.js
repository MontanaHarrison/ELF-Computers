import React from 'react';

function MainSummary(props) {
    return(
        <section className="main__summary">
        <h2>Your cart</h2>
        {props.summary}
      </section>
    )
}

export default MainSummary;