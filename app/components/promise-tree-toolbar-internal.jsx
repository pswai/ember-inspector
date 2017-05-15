import React from 'npm:react';
import PropTypes from 'npm:prop-types';
import classNames from 'npm:classnames';
import ClearButton from './clear-button';

class PromiseTreeToolbar extends React.Component {
  constructor(props) {
    super(props);

    this.renderFilterButton = this.renderFilterButton.bind(this);
    this.handleTrackPromiseCheckbox = this.handleTrackPromiseCheckbox.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  renderFilterButton(text, onClick, isActive) {
    const classes = classNames({
      active: isActive
    }, 'toolbar__radio', 'js-filter');

    return (
      <button
        type="button"
        className={classes}
        onClick={onClick}
      >{text}</button>
    );
  }

  handleTrackPromiseCheckbox(e) {
    this.props.updateInstrumentWithStack(e.target.checked);
  }

  handleSearchChange(e) {
    this.props.onSearchChange(e.target.value);
  }

  render() {
    const {
      instrumentWithStack,
      shouldRefresh,
      setFilter,
      refreshPage,
      noFilter,
      isRejectedFilter,
      isPendingFilter,
      isFulfilledFilter,
      searchValue,
      onClearButtonClick
    } = this.props;

    return (
      <div className="toolbar">
        <ClearButton customClass="js-clear-promises-btn" onClick={onClearButtonClick}/>

        <div className="toolbar__search js-promise-search">
          <input onChange={this.handleSearchChange} value={searchValue} placeholder="Search"/>
        </div>

        {this.renderFilterButton('All', () => setFilter('all'), noFilter)}

        <div className="divider"/>

        {this.renderFilterButton('Rejected', () => setFilter('rejected'), isRejectedFilter)}
        {this.renderFilterButton('Pending', () => setFilter('pending'), isPendingFilter)}
        {this.renderFilterButton('Fulfilled', () => setFilter('fulfilled'), isFulfilledFilter)}

        <div className="divider"/>

        <div className="toolbar__checkbox js-with-stack">
          <input
            id="instrument-with-stack"
            type="checkbox"
            checked={instrumentWithStack}
            onChange={this.handleTrackPromiseCheckbox}
          /> <label htmlFor="instrument-with-stack">Trace promises</label>
        </div>


        {/* if should refresh the refresh button will be in the middle of the of the tab */}
        {shouldRefresh || <div className="divider"/>}
        {shouldRefresh || (
          <button
            type="button"
            className="js-toolbar-page-refresh-btn"
            onClick={refreshPage}
          >Reload</button>
        )}
      </div>
    );
  }
}

PromiseTreeToolbar.propTypes = {
  setFilter: PropTypes.func.isRequired,
  refreshPage: PropTypes.func.isRequired,
  updateInstrumentWithStack: PropTypes.func.isRequired,
  onClearButtonClick: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  shouldRefresh: PropTypes.bool.isRequired,
  instrumentWithStack: PropTypes.bool.isRequired,
  noFilter: PropTypes.bool.isRequired,
  isRejectedFilter: PropTypes.bool.isRequired,
  isPendingFilter: PropTypes.bool.isRequired,
  isFulfilledFilter: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired
};

export default PromiseTreeToolbar;
