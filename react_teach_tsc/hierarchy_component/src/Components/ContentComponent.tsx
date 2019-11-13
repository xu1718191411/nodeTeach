import * as React from "react"

interface Props{
    content:string;
}

export class ContentComponent extends React.Component<Props>{
    render(){
        return <div className="content-component-content">
            <span>{this.props.content}</span>
        </div>;
    }
}