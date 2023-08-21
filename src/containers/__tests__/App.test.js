import App from "../App";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("App", function () {

  it("renders without crashing", () => {
    let mountedApp = shallow(<App />);
  });

  it("renders a StoreLocator", () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find("StoreLocator");
    expect(locators.length).toBe(1);
  });
  
});
