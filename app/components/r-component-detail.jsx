import React from 'npm:react';
import PropTypes from 'npm:prop-types';

const styles = {
  list: {
    listStyle: 'none',
    margin: 0,
    paddingLeft: '20px'
  }
};

const ComponentDetail = (props) => {
  const { component } = props;
  const { controller, model } = component;

  return (
    <div>
      <h1>{component.name}</h1>
      Template: {component.template}

    </div>
  );
};

ComponentDetail.propTypes = {
  component: PropTypes.shape({
    controller: PropTypes.shape({
      name: PropTypes.string,
      completeName: PropTypes.string,
      objectId: PropTypes.string
    }),
    model: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string
    }),
    template: PropTypes.string,
    name: PropTypes.string.isRequired,
    isComponent: PropTypes.bool.isRequired,
    tagName: PropTypes.string,
    elementId: PropTypes.string,
    objectId: PropTypes.string,
    renderNodeId: PropTypes.string,
    viewClass: PropTypes.string,
    duration: PropTypes.number,
    completeViewClass: PropTypes.string,
  }).isRequired
};

export default ComponentDetail;
