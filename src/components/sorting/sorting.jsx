import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/ui/ui";
import {SortType} from '../../constants';
import {sortTypes} from '../../types/sort-types';

const menuItems = [
  {
    type: SortType.POPULAR,
    text: `Popular`
  },
  {
    type: SortType.PRICE_HIGH_TO_LOW,
    text: `Price: high to low`
  },
  {
    type: SortType.PRICE_LOW_TO_HIGH,
    text: `Price: low to high`
  },
  {
    type: SortType.TOP_RATED,
    text: `Top rated first`
  }
];

class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSortClick = this._handleSortClick.bind(this);
    this._handleMenuClick = this._handleMenuClick.bind(this);
  }

  _handleSortClick() {
    const {
      isOpened,
      onShowSortMenu,
    } = this.props;

    onShowSortMenu(!isOpened);
  }

  _handleMenuClick(sortType) {
    this._handleSortClick();
    this.props.onSort(sortType);
  }

  render() {
    const {currentSortType, isOpened} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" onClick={this._handleSortClick} tabIndex="0">
                  Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${
          isOpened ? `places__options--opened` : ``
        }`}
        >
          {menuItems.map((menuItem) => (
            <li key={menuItem.type}
              className={`places__option ${menuItem.type === currentSortType ? `places__option--active` : ``}`}
              tabIndex="0"
              onClick={() => this._handleMenuClick(menuItem.type)}
            >
              {menuItem.text}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.sortOffers(sortType));
  },
  onShowSortMenu(isOpened) {
    dispatch(ActionCreator.showSortMenu(isOpened));
  }
});

const mapStateToProps = (state) => ({
  currentSortType: state.ui.currentSortType,
  isOpened: state.ui.showSortMenu,
});

Sorting.propTypes = sortTypes;

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
