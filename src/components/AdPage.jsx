import React, { Component } from "react";
import Ad from "./Ad";

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true,
    };
  }

  handleToggleClick = () => {
    this.setState((state) => ({
      showAd: !state.showAd,
    }));
  };

  render() {
    return (
      <div>
        <Ad show={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "Hide Ad" : "Show Ad"}
        </button>
      </div>
    );
  }
}

export default AdPage;
