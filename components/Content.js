import React from "react";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        Ou {this.state.counter} <br />
        <button onClick={e => this.handleClick(e)}>butt</button>
      </div>
    );
  }

  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }
}
