class BaseComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <HeaderComponent/>
            <ContentComponent/>
        </div>
    }
}
