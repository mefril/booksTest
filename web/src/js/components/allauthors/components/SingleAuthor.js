import React,{Component} from 'react'
import Dropdown from './Dropdown'

export default class extends Component{
    render(){
        return (
            <div className="singleBookElement">
                <Dropdown options={this.props.books}
                          authorName={this.props.name}
                          authorId={this.props.authorId}
                          onOptionClick={this.props.onBookClick}
                          onAuthorClick={this.props.onAuthorClick}
                          loadBooks={this.props.loadBooks}/>
            </div>
        )
    }
}