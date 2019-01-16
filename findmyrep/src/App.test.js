import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./Components/Header/index.js";
import { shallow, mount, render } from "enzyme";
import ControlSection from "./Features/ControlSection";
import MainSection from "./Features/MainSection";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders a Header Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAnyMatchingElements([<Header />])).toEqual(true);
  });

  it("renders a ControlSection Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAnyMatchingElements([<ControlSection />])).toEqual(
      true
    );
  });

  it("renders a MainSection Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAnyMatchingElements([<MainSection />])).toEqual(
      true
    );
  });
});
