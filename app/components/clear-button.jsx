import React from 'npm:react';
import PropTypes from 'npm:prop-types';
import classNames from 'npm:classnames';

const ClearButton = (props) => {
  const conditionals = {};

  if (props.onClick) {
    conditionals.onClick = props.onClick;
  }

  const classes = classNames('toolbar__icon-button', props.customClass);

  return (
    <button
      type="button"
      title="Clear"
      className={classes}
      {...conditionals}
    >
      <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g className="svg-stroke" transform="translate(3.000000, 3.7500000)" stroke="#000000" strokeWidth="2" fill="none" fillRule="evenodd">
          <circle cx="5.5" cy="5.5" r="5.5"/>
          <path d="M1.98253524,1.98253524 L9,9" id="Line" strokeLinecap="square"/>
        </g>
      </svg>
    </button>
  );
};

ClearButton.propTypes = {
  onClick: PropTypes.func,
  customClass: PropTypes.string
};

export default ClearButton;
