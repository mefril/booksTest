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
            optionMenu.unshift(<li className="bookListHeader">List of Books:</li>)
            optionMenu.unshift(<GoToAuthorListOption authorId={this.props.authorId}
                                                   goToAuthor={this.props.goToAuthor}/>);
            return optionMenu;
        }
    }

    render() {
        var options = this.buildMenu();
        return (
            <div id={this.dropdownId}
                 className='dropdown singleAuthor'>
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"
                        onClick={this.handleMouseClick}>
                    {this.props.authorName}
                    <span className="caret"/></button>
                <ul className='dropdown-menu'>
                    {options}
                </ul>
            </div>)
    }
}
Dropdown.defaultProps = {
    options: [],
    selectRowClassName: 'selectRow'
};
