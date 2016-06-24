import React, {Component} from 'react';
import DropdownOption from './DropdownOption'
import GoToAuthorListOption from './GoToAuthorListOption'
let uniqueElementOrder = 0;

export default class Dropdown extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            optionListHeight: 0
        };
        this.uniqueElementId = uniqueElementOrder++;
        this.dropdownId = 'dropDownComponent_' + this.uniqueElementId;
        this.selectedOptionElementId = 'dropDownSelectedOption_' + this.uniqueElementId;

    }

    componentDidUpdate() {
    }

    handleOptionClick(option) {
        this.handleOptionClick(option);
    }

    handleMouseClick = ()=> {
        this.props.loadBooks(this.props.authorId);
    };

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
                return <DropdownOption key={i} 
                                       option={option}
                                       onOptionClick={this.props.goToBook}/>;
            });
            optionMenu.shift(<GoToAuthorListOption authorId={this.props.authorId}
                                                   goToAuthor={this.props.goToAuthor}/>)
            return optionMenu;
        }
    }

    render() {
        // var optionsContainerWrapper = ClassNames("optionScrollContainer scrollableWrapper", {show: this.state.isOpen});
        // var expanded = this.state.isOpen ? 'open' : "";
        var options = this.buildMenu();
        return (
            <div id={this.dropdownId} ref='container'
                 className='dropdown'>
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                        onClick={this.handleMouseClick}>
                    Written Books
                    <span className="caret"/></button>
                <ul className='dropdown-menu'>
                    {options}
                </ul>
            </div>)
    }
}
Dropdown.defaultProps = {
    options: [],
    componentClassName: 'selectContainer',
    selectRowClassName: 'selectRow'
};
