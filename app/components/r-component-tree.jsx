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
    hidePreview,
    onComponentClick
  } = props;

  if (!info) {
    return null;
  }

  if (!subTrees || subTrees.length < 1) {
    return (
      <ul style={styles.list}>
        <li
          onMouseEnter={() => previewLayer(info)}
          onMouseLeave={hidePreview}
          onClick={() => onComponentClick(info)}
        >{`{{${info.name}}}`} {!info.isComponent && '(Not Component)'}</li>
      </ul>
    );
  }

  return (
    <ul style={styles.list}>
      <li
        onMouseEnter={() => previewLayer(info)}
        onMouseLeave={hidePreview}
        onClick={() => onComponentClick(info)}
      >{`{{#${info.name}}}`} {!info.isComponent && '(Not Component)'}</li>
      <li>{subTrees.map((subTree, index) => (
        <ComponentTree
          key={index}
          tree={subTree}
          previewLayer={previewLayer}
          hidePreview={hidePreview}
          onComponentClick={onComponentClick}
        />
      ))}</li>
      <li>{`{{/${info.name}}}`}</li>
    </ul>
  );
};

ComponentTree.propTypes = {
  previewLayer: PropTypes.func,
  hidePreview: PropTypes.func,
  onComponentClick: PropTypes.func
};

export default ComponentTree;