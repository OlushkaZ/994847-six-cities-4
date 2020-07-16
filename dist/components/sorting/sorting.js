"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorting = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const ui_1 = require("../../reducer/ui/ui");
const constants_1 = require("../../constants");
const sort_types_1 = require("../../types/sort-types");
const menuItems = [
    {
        type: constants_1.SortType.POPULAR,
        text: `Popular`
    },
    {
        type: constants_1.SortType.PRICE_HIGH_TO_LOW,
        text: `Price: high to low`
    },
    {
        type: constants_1.SortType.PRICE_LOW_TO_HIGH,
        text: `Price: low to high`
    },
    {
        type: constants_1.SortType.TOP_RATED,
        text: `Top rated first`
    }
];
class Sorting extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this._handleSortClick = this._handleSortClick.bind(this);
        this._handleMenuClick = this._handleMenuClick.bind(this);
    }
    _handleSortClick() {
        const { isOpened, onShowSortMenu, } = this.props;
        onShowSortMenu(!isOpened);
    }
    _handleMenuClick(sortType) {
        this._handleSortClick();
        this.props.onSort(sortType);
    }
    render() {
        const { currentSortType, isOpened } = this.props;
        return (react_1.default.createElement("form", { className: "places__sorting", action: "#", method: "get" },
            react_1.default.createElement("span", { className: "places__sorting-caption" }, "Sort by"),
            react_1.default.createElement("span", { className: "places__sorting-type", onClick: this._handleSortClick, tabIndex: "0" },
                currentSortType,
                react_1.default.createElement("svg", { className: "places__sorting-arrow", width: "7", height: "4" },
                    react_1.default.createElement("use", { xlinkHref: "#icon-arrow-select" }))),
            react_1.default.createElement("ul", { className: `places__options places__options--custom ${isOpened ? `places__options--opened` : ``}` }, menuItems.map((menuItem) => (react_1.default.createElement("li", { key: menuItem.type, className: `places__option ${menuItem.type === currentSortType ? `places__option--active` : ``}`, tabIndex: "0", onClick: () => this._handleMenuClick(menuItem.type) }, menuItem.text))))));
    }
}
exports.Sorting = Sorting;
const mapDispatchToProps = (dispatch) => ({
    onSort(sortType) {
        dispatch(ui_1.ActionCreator.sortOffers(sortType));
    },
    onShowSortMenu(isOpened) {
        dispatch(ui_1.ActionCreator.showSortMenu(isOpened));
    }
});
const mapStateToProps = (state) => ({
    currentSortType: state.ui.currentSortType,
    isOpened: state.ui.showSortMenu,
});
Sorting.propTypes = sort_types_1.sortTypes;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Sorting);
//# sourceMappingURL=sorting.js.map