import React from "react";
import ReactDOM from "react-dom";
import MainSection from "./index.js";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Main Section", () => {
  it("renders without crashing", () => {
    shallow(<MainSection />);
  });
});
