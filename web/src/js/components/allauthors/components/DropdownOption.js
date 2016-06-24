import React, {Component} from 'react'

export default class SchedulePollDropdownOption extends Component {

    onOptionClick = () => {
        this.props.onOptionClick(this.props.option)
    };

    render() {
        return (
            <li onClick={this.onOptionClick} className="bookTitle">
                {this.props.option.title}
            </li>
        )
    }
}
