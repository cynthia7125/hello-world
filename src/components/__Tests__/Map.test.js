import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Map from "../Map";

// Configure the Enzyme adapter
configure({ adapter: new Adapter() });

describe("Map", function () {
  let mountedMap;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
      imagename: 'testmap.png'
    };
    mountedMap = shallow(<Map {...props} />);
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
    let defaultMap = shallow(<Map />);
    const defaultImage = defaultMap.find('img [src="images/none.png"]');
    expect(defaultImage.length).toBe(1);
  });

  it('displays the map imagename passed to it', () => {
    const testMap = mountedMap.find('img [src="images/testmap.png"]');
    expect(testMap.length).toBe(1);
  });

});
