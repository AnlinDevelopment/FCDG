import React from "react";

class Fetch extends React.Component {
  state = {
    loading: true,
    entry: null,
  };

  async componentDidMount() {
    const url = "http://localhost:3001/api/get/cards/";
    // const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ entry: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.entry) {
      return <div>No data recieved</div>;
    }

    console.log(this.state.entry);

    return (
      <div>
        {/* <div>{this.state.entry[0].id}</div>
        <div>{this.state.entry[0].title}</div>
        <div>{this.state.entry[0].description}</div>
        <div>{this.state.entry[0].photo.data}</div>
        <img src={this.state.entry[0].photo.data} /> */}
      </div>
    );
  }
}

export default Fetch;
