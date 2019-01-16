import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import RepDropDown from "./index.js";

test("RepDropDown component renders with proper styling", () => {
  const tree = renderer.create(<RepDropDown />).toJSON();
  expect(tree).toMatchSnapshot();
});
