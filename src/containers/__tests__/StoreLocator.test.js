import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StoreLocator from "../StoreLocator";
import axios from "axios";

jest.mock("axios");

configure({ adapter: new Adapter() });

describe("StoreLocator", function () {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("calls axios.get in #componentDidMount", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalled();
      });
  });

  it("calls axios.get with correct url", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(axios.get).toHaveBeenCalledWith(
          "http://localhost:3000/data/shops.json"
        );
      });
  });

  it("updates state with api data", () => {
    return mountedStoreLocator
      .instance()
      .componentDidMount()
      .then(() => {
        expect(mountedStoreLocator.state()).toHaveProperty("shops", [
          {
            location: "test location",
            address: "test address",
          },
        ]);
      });
  });

  it("renders without crashing", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders two buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(3);
  });

  it("renders a map", () => {
    const map = mountedStoreLocator.find("Map");
    expect(map.length).toBe(1);
  });
});

describe("chooseMap", () => {
  it("updates this.state.currentMap using the location passed to it", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
    let mockEvent = { target: { value: "testland" } };
    mountedStoreLocator.instance().chooseMap(mockEvent);
    expect(mountedStoreLocator.instance().state.currentMap).toBe(
      "testland.png"
    );
  });
});
