import React from 'react'
export class ContentComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>{this.props.content}</div>
    }
}