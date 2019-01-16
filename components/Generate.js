import React from "react";
import axios from "axios";
export default class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/")
      .then(response => {
        const data = response.data.results;
        this.setState({ data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        ,
        {this.state.data.map((item, index) => (
          <UserList key={index} {...item} />
        ))}
        export default({name}) => <h1>Hello {name}!</h1>;
      </div>
    );
  }
}
