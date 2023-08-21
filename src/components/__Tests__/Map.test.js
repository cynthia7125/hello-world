import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Map from "../Map";

// Configure the Enzyme adapter
configure({ adapter: new Adapter() });

describe("Map", function () {
  let mountedMap;

  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });

  // Now you can use Enzyme's APIs
  it("renders without crashing", () => {
    let mountedMap = shallow(<Map />);
  });

  it("constins a map image", () => {
    const img = mountedMap.find("img");
    expect(img.length).toBe(1);
  });

  it("displays the none map when no params are given", () => {
    const defaultMap = mountedMap.find('img [src="images/none.png"]');
    expect(defaultMap.length).toBe(1);
  });
});
