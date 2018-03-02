import React from 'react';
import PropTypes from 'prop-types';
import DefaultImage from './default_image.gif';

class Image extends React.Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.name} />
    );
  }
}

Image.propTypes = {
  /** The name of the image */
  name: PropTypes.string,
  /** The file path for the image file */
  source: PropTypes.string,
};

Image.defaultProps = {
  source: DefaultImage,
};

export default Image;
