import React from "react";
import Grid from "@material-ui/core/Grid";
import RepTable from "./index.js";
import Subheader from "../../Components/Subheader";
import MemberH1 from "../../Components/MemberH1";
import Rep from "../../Components/Rep";
import { shallow, mount, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Tests for RepTable", () => {
  const data = [
    {
      name: "Steve Chabot",
      party: "Republican",
      state: "OH",
      district: "1",
      phone: "202-225-2216",
      office: "2408 Rayburn House Office Building; Washington DC 20515-3501",
      link: "https://chabot.house.gov"
    }
  ];

  const title = "Representatives";

  it("renders without crashing", () => {
    shallow(<RepTable data={data} title={title} />);
  });

  it("renders 2 Grid Components", () => {
    const wrapper = shallow(<RepTable data={data} title={title} />);
    expect(wrapper.find(Grid)).toHaveLength(1);
  });

  it("renders 1 Subheader Component", () => {
    const wrapper = shallow(<RepTable data={data} title={title} />);
    expect(wrapper.find(Subheader)).toHaveLength(1);
  });

  it("renders 1 MemberH1 Component", () => {
    const wrapper = shallow(<RepTable data={data} title={title} />);
    expect(wrapper.find(MemberH1)).toHaveLength(1);
  });

  it("renders the title from props inside MemberH1 Component", () => {
    const wrapper = shallow(<RepTable data={data} title={title} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <MemberH1>Representatives</MemberH1>
      ])
    ).toEqual(true);
  });

  it("renders name data from props inside Rep Component", () => {
    const wrapper = shallow(<RepTable data={data} title={title} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <Rep>
          <p>Steve Chabot</p>
        </Rep>
      ])
    ).toEqual(true);
  });

  it("renders party data from props inside Rep Component", () => {
    const wrapper = shallow(<RepTable data={data} title={title} />);
    expect(
      wrapper.containsAnyMatchingElements([
        <Rep>
          <p>R</p>
        </Rep>
      ])
    ).toEqual(true);
  });
});
