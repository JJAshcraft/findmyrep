import React from "react";
import ReactDOM from "react-dom";
import ControlSection from "./index.js";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Control Section", () => {
  it("renders without crashing", () => {
    shallow(<ControlSection />);
  });
});
