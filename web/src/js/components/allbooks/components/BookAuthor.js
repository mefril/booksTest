import React,{Component} from 'react'

export default class extends Component{
    render(){
        return (
            <div className="bookAuthor">
                {this.props.author.name}
            </div>
        )
    }
}