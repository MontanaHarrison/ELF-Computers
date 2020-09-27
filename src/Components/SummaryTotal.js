import React from 'react';

function SummaryTotal(props) {
    return(
        <section>
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {props.USCurrencyFormat.format(props.total)}
          </div>
        </div>
      </section>
    )
}

export default SummaryTotal;