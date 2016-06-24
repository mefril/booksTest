import React,{Component} from 'react'

export default class extends Component{
    render(){
        return (
            <li className="bookAuthor">
                {this.props.author.name}
            </li>
        )
    }
}