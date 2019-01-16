import React from "react";
import Grid from "@material-ui/core/Grid";
import RepInfoBox from "./index.js";
import StyledDiv from "../../Components/StyledDiv";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Testing for RepInfoBox", () => {
  const memberInfo = {
    name: "Josh Ashcraft",
    office: "1234 test drive lane, Tampa Florida",
    district: "0",
    phone: "111-222-3333"
  };

  it("renders without crashing", () => {
    shallow(<RepInfoBox memberInfo={memberInfo} />);
  });

  it("renders 2 Grid Components", () => {
    const wrapper = shallow(<RepInfoBox memberInfo={memberInfo} />);
    expect(wrapper.find(Grid)).toHaveLength(2);
  });

  it("renders 5 StyledDiv Components", () => {
    const wrapper = shallow(<RepInfoBox memberInfo={memberInfo} />);
    expect(wrapper.find(StyledDiv)).toHaveLength(5);
  });

  it("renders a StyledDiv Component with first name Josh", () => {
    const wrapper = shallow(<RepInfoBox memberInfo={memberInfo} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <StyledDiv>
          <p>Josh</p>
        </StyledDiv>
      ])
    ).toEqual(true);
  });

  it("renders a StyledDiv Component with last name Ashcraft", () => {
    const wrapper = shallow(<RepInfoBox memberInfo={memberInfo} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <StyledDiv>
          <p>Ashcraft</p>
        </StyledDiv>
      ])
    ).toEqual(true);
  });

  it("renders a StyledDiv Component with office address '1234 test drive lane, Tampa Florida'", () => {
    const wrapper = shallow(<RepInfoBox memberInfo={memberInfo} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <StyledDiv>
          <p>1234 test drive lane, Tampa Florida</p>
        </StyledDiv>
      ])
    ).toEqual(true);
  });

  it("renders a StyledDiv Component with phone '111-222-3333'", () => {
    const wrapper = shallow(<RepInfoBox memberInfo={memberInfo} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <StyledDiv>
          <p>111-222-3333</p>
        </StyledDiv>
      ])
    ).toEqual(true);
  });
});
