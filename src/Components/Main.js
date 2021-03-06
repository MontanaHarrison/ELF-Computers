import React from 'react';
import Header from './Header.js'

function Main (props) {
  return (
      <div className="App">
        <Header />
        <main>
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {props.features}
        </form>
      <section className="main__summary">
        <h2>Your cart</h2>
        {props.summary}
      </section>
      <section>
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {props.USCurrencyFormat.format(props.total)}
          </div>
        </div>
      </section>
          
        </main>
      </div>
  )
}

export default Main;