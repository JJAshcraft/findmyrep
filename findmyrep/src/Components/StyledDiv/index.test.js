import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import StyledDiv from "./index.js";

test("StyledDiv renders with proper styling", () => {
  const tree = renderer.create(<StyledDiv />).toJSON();
  expect(tree).toMatchSnapshot();
});
