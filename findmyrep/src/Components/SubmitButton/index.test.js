import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import SubmitButton from "./index.js";

test("HR component renders with proper styling", () => {
  const tree = renderer.create(<SubmitButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
