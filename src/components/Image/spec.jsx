import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Image from './';

describe('Image', () => {
  it('renders without crashing', () => {
    shallow(<Image />);
  });

  describe('when provided with a name', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Image name="My Image Name" />, div);
    });
  });

  describe('when provided with an image source', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Image source="http://via.placeholder.com/350x150/E8117F" />, div);
    });
  });
});
