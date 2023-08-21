import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../Button';

// Configure the Enzyme adapter
configure({ adapter: new Adapter() });

describe("Button", function () {
    let mountedButton;

    beforeEach(() => {
        mountedButton = shallow(<Button />);
    })

    // Now you can use Enzyme's APIs
    it('renders without crashing', () => {
        let mountedButton = shallow(<Button />);
    });

    it('renders a button', () => {
        const button = mountedButton.find('button');
        expect(button.length).toBe(1);
    });

});

describe("When a location is passed to it", function () {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: "Location1"
        }
        
        mountedButton = shallow(<Button {...props} />);
    });

    it('displays the location', () => {
        const locName = mountedButton.find('.location-button');
        expect(locName.text()).toEqual('Location1');
    })

});

describe("When no location is passed to it", function () {
    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            location: undefined
        }
        
        mountedButton = shallow(<Button {...props} />);
    });

    it('displays the location', () => {
        const locName = mountedButton.find('.location-button');
        expect(locName.text()).toEqual('All Locations');
    })

});
