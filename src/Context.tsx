import React, {Component} from 'react'
import {appData, IAppData} from "./appData";

const context = React.createContext<IAppData>(appData);

export class AppContextProvider extends Component<null, IAppData> {
    state = appData
    render(){
        return (
            <context.Provider value={
                this.state
            }>
                {this.props.children}
            </context.Provider>
        )
    }
}

export const AppContextConsumer = context.Consumer;