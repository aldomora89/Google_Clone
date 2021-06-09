import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.css';

const Box = () => (
  <div className={styles.Box} data-testid="Box">
    Google
    <input type='text' placeholder='Seach Here'></input>
  </div>

);

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
