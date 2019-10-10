class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className={"menu"}>
            <div>text</div>
            <div>follow</div>
            <div>sentence</div>
            <div>vocabulary</div>
            <div>my</div>
        </div>
    }
}

class ContentComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div className={"content"}>
            <p>content</p>
        </div>
    }
}



