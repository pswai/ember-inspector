import React from 'npm:react';
import PropTypes from 'npm:prop-types';

const NotDetected = (props) => {
  const { description, children } = props;

  return (
    <div className='error-page js-error-page'>
      <div className='error-page__content'>
        <div className='error-page__header'>
          <div className='error-page__title js-error-page-title'>{description} not detected!</div>
        </div>
        <div className='error-page__reasons'>
          <div className='error-page__reasons-title'>Here are some common reasons this happens:</div>
          <ul className='error-page__list'>
            {children}
          </ul>
          If you're still having trouble, please file an issue on the Ember Inspector's
          <a href='https://github.com/emberjs/ember-inspector' target='_blank'>GitHub page.</a>
        </div>
      </div>
    </div>
  );
};

NotDetected.propTypes = {
  description: PropTypes.string.isRequired
};

export default NotDetected;
