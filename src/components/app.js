import React, { Component } from 'react';
import BirthdayFrom from './birthdayForm';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <header>
          <h1>Birthday Countdown</h1>
          <div className='header__skew'>
            <div className='header__subskew'>
              <BirthdayFrom />
            </div>
          </div>
        </header>
      </div>
    );
  }
}
