import React, {Component} from 'react'
import {appData, appFunctions, IAppData} from "./appData";

interface IContext extends IAppData {
    handleBtnLikeClick: (id: number) => void
}

interface IProps {
    children: any
}

const context = React.createContext<IContext>({...appData, ...appFunctions});

export const AppContextConsumer = context.Consumer;

export class AppContextProvider extends Component<IProps, IAppData> {
    state = appData
    public handleBtnLikeClick = (id: number) => {
        if (this.state.user.likedSnacks.length === this.state.maxLikes) {
            alert('you reached the maximum number of likes!!!')
            return
        }
        this.setState((prevState) => {
            const user = prevState.user
            const newUserLikedSnacks = user.likedSnacks.concat([id])
            const newUser = {...user, likedSnacks: newUserLikedSnacks}
            const snackIndex = prevState.snacks.findIndex(snack => snack.id === id);
            const prevSnack = prevState.snacks[snackIndex]
            const newSnack = {...prevSnack, likesCount: prevSnack.likesCount + 1}
            const newSnacks = [
                ...prevState.snacks.slice(0, snackIndex),
                newSnack,
                ...prevState.snacks.slice(snackIndex + 1)
            ]

            return {
                user: newUser,
                snacks: newSnacks
            }
        })
    }

    render() {
        return (
            <context.Provider value={{
                ...this.state,
                handleBtnLikeClick: this.handleBtnLikeClick
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default AppContextProvider
