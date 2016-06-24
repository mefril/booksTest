import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import AppUtils from 'utils/AppUtils';
import UiUtils from 'utils/UiUtils';
import IScroll from 'iscroll';
import DropdownOption from './DropdownOption'

const DEFAULT_MAX_HEIGHT = 400;
const OFFSET_FROM_CONTAINER_BOTTOM = 5;

let uniqueElementOrder = 0;

export default class Dropdown extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isOpen: false,
            optionListHeight: 50
        };
        this.uniqueElementId = uniqueElementOrder++;
        this.dropdownId = 'dropDownComponent_' + this.uniqueElementId;
        this.selectedOptionElementId = 'dropDownSelectedOption_' + this.uniqueElementId;

    }

    componentWillReceiveProps(newProps) {
        if (newProps.selectedOption) {
            this.setState({
                isOpen: false
            });
        }
        else {
            this.setState({
                isOpen: false
            });
        }
    }

    componentDidMount() {
        if (this.props.options.length > 0) {
            this.initScroll();
            this.scroll.refresh();
        }
    }

    componentDidUpdate() {
        if (!this.scroll && this.props.options.length > 0) {
            this.initScroll();
        }
        if (this.scroll) {
            this.scroll.refresh();
        }
        if (this.needToUpdateOptionContainerHeight) {
            this.needToUpdateOptionContainerHeight = false;
            this.setState({
                    optionListHeight: this.recalculateOptionContainerHeight()
                }
            )
        }
    }

    initScroll() {
        this.scroll = new IScroll(this.refs.dropdownScrollableWrapper, {
            mouseWheel: true,
            scrollbars: false,
            fadeScrollbars: false,
            click: AppUtils.isIPad(),
            bounce: false
        });
    }

    handleOptionClick(option) {
        this.handleOptionSelect(option);
    }

    handleOptionSelect(option) {
        if (this.props.onChange) {
            this.props.onChange(option);
        } else {
            this.setState({isOpen: false});
        }
    }

    handleMouseDown() {
        if (!AppUtils.isIPad()) {
            this.handleMouseClick();
        }
    }

    handleTouchDown() {
        if (AppUtils.isIPad()) {
            this.handleMouseClick();
        }
    }

    handleMouseClick() {
        this.props.loadData(this.props.authorId, ()=> {
            this.needToUpdateOptionContainerHeight = true;
            UiUtils.setListenerOutOfSomeElementClick(this.dropdownId, this.closeDropdown.bind(this), AppUtils.isIPad() ? "touchend" : "mousedown", this.selectedOptionElementId);
            this.setState({
                isOpen: true
            });
        });
    }

    recalculateOptionContainerHeight() {
        var currentTop = this.refs.container.getBoundingClientRect().top + this.refs.container.getBoundingClientRect().height,
            listHeight = this.refs.optionListContainer.getBoundingClientRect().height,
            windowWidth = self.innerWidth,
            windowHeight = self.innerHeight,
            vminValue = windowHeight > windowWidth ? windowWidth : windowHeight;

        if (this.props.elementToFitIn) {
            var elementToFitInRect = ReactDOM.findDOMNode(this.props.elementToFitIn).getBoundingClientRect();
            var maxHeight = elementToFitInRect.top + elementToFitInRect.height;
        } else {
            return Math.min(DEFAULT_MAX_HEIGHT, listHeight + 1) / vminValue * 100;
        }
        return Math.min(maxHeight - currentTop - OFFSET_FROM_CONTAINER_BOTTOM,
                DEFAULT_MAX_HEIGHT,
                listHeight + 1) / vminValue * 100;
    }

    closeDropdown() {
        this.setState({
            isOpen: false
        });
    }

    buildMenu() {
        var i = 0;
        var atLeastOneResult = false;
        if (this.props.options) {
            var optionMenu = this.props.options.map((option)=> {
                i = i + 1;
                atLeastOneResult = true;
                return <DropdownOption key={i} option={option}
                                       onOptionClick={this.props.onOptionClick}/>;
            });
        }
        return optionMenu;
    }

    render() {
        var optionsContainerWrapper = ClassNames("optionScrollContainer scrollableWrapper", {show: this.state.isOpen});
        var expanded = this.state.isOpen ? 'expanded' : "";
        var options = this.buildMenu();
        let containerClassName = ClassNames(
            'schedulePollDropdownButton',
            'editingView',
            {opened: this.state.isOpen});
        return (
            <div id={this.dropdownId} ref='container'
                 className={this.props.componentClassName + " " + expanded}>
                <div ref="selectedOptionElement" id={this.selectedOptionElementId}
                     className='selectRow'
                     onClick={this.handleMouseDown.bind(this)}
                     onTouchStart={this.handleTouchDown.bind(this)}>
                    Written Books
                </div>
                <div className={optionsContainerWrapper}
                     ref="dropdownScrollableWrapper"
                     style={{height : this.state.optionListHeight + "vmin"}}>
                    <ul className="scrollableContainer"
                        ref="optionListContainer"
                    >{options}</ul>
                </div>
            </div>)
    }
}
Dropdown.defaultProps = {
    options: [],
    componentClassName: 'selectContainer',
    selectRowClassName: 'selectRow'
};
