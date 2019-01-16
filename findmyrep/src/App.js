import React, { Component, Fragment } from "react";
import axios from "axios";
import Header from "./Components/Header";
import ControlSection from "./Features/ControlSection";
import MainSection from "./Features/MainSection";
import styled from "styled-components";

const AppWrapper = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: #fff;
  margin: 0 auto;
  padding: 160px 40px 0 30px;
  @media (min-width: 764px) {
    max-width: 764px;
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      USState: "",
      data: [],
      memberInfo: {}
    };
  }

  changeTitle = title => {
    if (title !== "") {
      this.setState({ title });
    } else {
      this.setState({ title: "" });
    }
  };

  changeState = USState => {
    if (USState !== "") {
      this.setState({ USState });
    } else {
      this.setState({ USState: "" });
    }
  };

  handleSubmit = () => {
    let title = this.state.title.toLowerCase();
    let USState = this.state.USState.toLowerCase();
    axios.get(`http://127.0.0.1:3300/${title}/${USState}`).then(response => {
      this.setState({ data: response.data.results });
    });
  };

  updateInfoBox = name => {
    const members = this.state.data.slice();
    let info = members.find(element => {
      return element.name === name;
    });
    this.setState({ memberInfo: info });
  };

  render() {
    return (
      <Fragment>
        <AppWrapper>
          <Header />
          <ControlSection
            changeTitle={this.changeTitle}
            changeState={this.changeState}
            handleSubmit={this.handleSubmit}
            disabled={this.state.title && this.state.USState ? false : true}
          />
          <MainSection
            data={this.state.data}
            title={this.state.title}
            updateInfoBox={this.updateInfoBox}
            memberInfo={this.state.memberInfo}
          />
        </AppWrapper>
      </Fragment>
    );
  }
}

export default App;
