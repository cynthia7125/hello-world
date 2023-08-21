import Header from '../Header';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Header", function () {
  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('renders without crashing', () => {
    let mountedHeader = shallow(<Header />);
  });

  it('renders a logo', () => {
    const logoImg = mountedHeader.find('img [src="images/wired-brain-coffee-logo.png"]');
    expect(logoImg.length).toBe(1);
  });

});


