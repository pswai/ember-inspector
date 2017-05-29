import React from 'npm:react';
import PropTypes from 'npm:prop-types';

const styles = {
  list: {
    listStyle: 'none',
    margin: 0,
    paddingLeft: '20px'
  }
};

const ComponentTree = (props) => {
  const {
    tree: { info, subTrees },
    previewLayer,
    hidePreview
  } = props;

  if (!info) {
    return null;
  }

  if (!subTrees || subTrees.length < 1) {
    return (
      <ul style={styles.list}>
        <li>{`{{${info.name}}}`} {!info.isComponent && '(Not Component)'}</li>
      </ul>
    );
  }

  return (
    <ul style={styles.list}>
      <li
        onMouseEnter={previewLayer}
        onMouseLeave={hidePreview}
      >{`{{#${info.name}}}`} {!info.isComponent && '(Not Component)'}</li>
      <li>{subTrees.map((subTree, index) => <ComponentTree key={index} tree={subTree}/>)}</li>
      <li>{`{{/${info.name}}}`}</li>
    </ul>
  );
};

ComponentTree.propTypes = {
  previewLayer: PropTypes.func,
  hidePreview: PropTypes.func
};

export default ComponentTree;
