import React, {Component} from 'react'

export default class SchedulePollDropdownOption extends Component {

    onClick = () => {
        this.props.goToAuthor(this.props.authorId)
    };

    render() {
        return (
            <li onClick={this.onClick} className="goToAuthorOption">
                Go To Author
            </li>
        )
    }
}
