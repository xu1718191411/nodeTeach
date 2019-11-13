import * as React from "react"

interface Props{
    onClickMenuFromMenuComponent:Function;
}

export class MenuComponent extends React.Component<Props>{

    private handleClickMenu(type:string){
        this.props.onClickMenuFromMenuComponent(type);
    }

    render() {
        return <div className={"menu"}>
            <div onClick={(e)=>this.handleClickMenu("text")}>text</div>
            <div onClick={(e)=>this.handleClickMenu("vocabularies")}>vocabulary</div>
            <div onClick={(e)=>this.handleClickMenu("sentences")}>sentence</div>
            <div onClick={(e)=>this.handleClickMenu("follow")}>follow</div>
            <div onClick={(e)=>this.handleClickMenu("self")}>self</div>
        </div>;
    }
}