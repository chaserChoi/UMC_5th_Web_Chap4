import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAd: true,
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      displayAd: !prevState.displayAd,
    }));
  };

  render() {
    return (
      <div>
        {this.state.displayAd && <Ad />}
        <button onClick={this.handleToggleClick}>
          {this.state.displayAd ? 'Hide Ad' : 'Show Ad'}
        </button>
      </div>
    );
  }
}

export default AdPage;
