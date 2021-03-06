import React,{Component} from 'react'
import Dropdown from './Dropdown'

export default class extends Component{
    render(){
        return (
            <div className="singleBookElement">
                <Dropdown options={this.props.books}
                          authorName={this.props.name}
                          authorId={this.props.authorId}
                          goToBook={this.props.goToBook}
                          goToAuthor={this.props.goToAuthor}
                          loadBooks={this.props.loadBooks}/>
            </div>
        )
    }
}