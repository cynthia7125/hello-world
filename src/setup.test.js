import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('sample test', () => {
    expect(2 + 2).toBe(4);
  });