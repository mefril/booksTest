import React,{Component} from 'react'

export default class extends Component{
    goToAuthor=()=>{
        this.props.goToAuthor(this.props.author._id)
    };
    
    render(){
        return (
            <li className="bookAuthor" onClick={this.goToAuthor}>
                {this.props.author.name}
            </li>
        )
    }
}