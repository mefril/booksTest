import React,{Component} from 'react'
import Dropdown from './Dropdown'


export default class extends Component{
    render(){

        return (
            <li className="singleBookElement">
                <div className="authorName">{this.props.name}</div>
                <div className="authorBiography">{this.props.about}</div>
                <Dropdown options={this.props.books}
                          authorId={this.props.authorId}
                          onOptionClick={this.props.onBookClick}
                          loadData={this.props.loadBooks}/>
            </li>
        )
    }
}