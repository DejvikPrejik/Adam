import React from "react";

import Header from "./Header";
import Content from "./Content";
import Generate from "./Generate";
export default class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Generate />
      </div>
    );
  }
}
