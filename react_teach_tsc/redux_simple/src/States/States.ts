export interface State{
    contentComponentState:ContentComponentState;
    menuComponentState:MenuComponentState;
}

export interface ContentComponentState{
    content:string;
}

export interface MenuComponentState{
    type:string;
}