import React from 'react';
import Header from './Header.js'
import MainForm from './MainForm.js'
import SummaryTotal from './SummaryTotal.js';

function Main (props) {
  return (
      <div className="App">
        <Header />
        <main>
          <MainForm features={features}/>
          <MainSummary summary={summary}/>
          <SummaryTotal USCurrencyFormat={USCurrencyFormat} total={total}/>
        </main>
      </div>
  )
}

export default Main;