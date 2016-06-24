import React, {Component} from 'react'

export default class extends Component {

    onClick = ()=> {
        this.props.onClick(this.props.type);
    };

    render() {
        return (
            <li className="singleGenre" onClick={this.onClick}>
                {this.props.type}
            </li>
        )
    }
}