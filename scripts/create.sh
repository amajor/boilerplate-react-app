#!/bin/bash

# Prompt for component name.
read -p 'Component Name (in PascalCase, please): ' componentName

# Navigate to the components directory.
cd src/components

# Create a new directory, named for the new component.
mkdir $componentName

# Go into that directory.
cd $componentName

# Create the component file.
cat > index.jsx << EOF
import React from 'react';
import PropTypes from 'prop-types';

const $componentName = props => (
  <div>
    <p>This is a new component, named $componentName.</p>
    <p>{props.fakeProp1}</p>
    <p>{props.fakeProp2}</p>
  </div>
);

$componentName.propTypes = {
  /** Write a description above each prop like this. */
  fakeProp1: PropTypes.string,
  /** These are fake props that should be edited. */
  fakeProp2: PropTypes.string,
};

$componentName.defaultProps = {
  fakeProp1: 'A default string.',
  fakeProp2: 'Another default string.',
};

export default $componentName;
EOF

# Create the tests file.
cat > spec.jsx << EOF
import React from 'react';
import { shallow } from 'enzyme';
import $componentName from './';

describe('$componentName', () => {
  const defaultComponent = shallow(<$componentName />);

  it('renders without crashing', () => {
    expect(defaultComponent).toBeDefined;
  });
});
EOF

# Create the storybook file.
cat > stories.jsx << EOF
import React from 'react';
import { storiesOf } from '@storybook/react';

import $componentName from './';

storiesOf('$componentName', module)
  .add('default', () => (
    <$componentName />
  ));
EOF
