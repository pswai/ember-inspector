import React from 'npm:react';
import PropTypes from 'npm:prop-types';

const LibraryInfo = (props) => {
  const { libraries } = props;

  return (
    <table>
      <thead>

      <tr>
        <th>Library</th>
        <th>Version</th>
      </tr>

      </thead>

      <tbody>

      {libraries.map((library, index) => (
        <tr key={index}>
          <td>{library.name}</td>
          <td>{library.version}</td>
        </tr>
      ))}

      </tbody>
    </table>
  );
};

LibraryInfo.propTypes = {
  libraries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired
  })).isRequired
};

export default LibraryInfo;
