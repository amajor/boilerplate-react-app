import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './';

const catImagePath = 'https://media.giphy.com/media/l1J3pT7PfLgSRMnFC/giphy.gif';

storiesOf('Image', module)
  .add('with alt text and src', () => (
    <Image name="Enjoy a cat picture!" source={catImagePath} />))
  .add('with alt text', () => <Image name="This is some alternate text" />)
  .add('with source', () => <Image source={catImagePath} />);
