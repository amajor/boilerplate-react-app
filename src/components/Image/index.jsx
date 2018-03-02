import React from 'react';
import PropTypes from 'prop-types';
import DefaultImage from './default_image.gif';

const Image = props => (
  <img src={props.source} alt={props.name} />
);

Image.propTypes = {
  /** The name of the image */
  name: PropTypes.string,
  /** The file path for the image file */
  source: PropTypes.string,
};

Image.defaultProps = {
  name: '',
  source: DefaultImage,
};

export default Image;
