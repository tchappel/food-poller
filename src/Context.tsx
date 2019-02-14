import React, {Component} from 'react'
import {appData, IAppData} from "./appData";

interface IAppContext {
    state: IAppData,
    handleBtnLikeClick: (id: number) => void
}

interface IProps {
    children: any
}

const context = React.createContext<IAppContext | null>(null);

export const AppContextConsumer = context.Consumer;

export class AppContextProvider extends Component<IProps, IAppData> {
    state = appData
    render(){
        return (
            <context.Provider value={{
                state: this.state,
                handleBtnLikeClick: (id: number) => {
                    if (this.state.user.snacksLikesCount === this.state.maxLikes) {
                        alert('you reached the maximum number of likes!!!')
                        return
                    }
                    this.setState((prevState) => {
                        const prevUser = prevState.user
                        const newUserLikedSnacks = prevUser.likedSnacks.concat([id])
                        const newUserSnacksLikesCount = prevUser.snacksLikesCount + 1
                        const newUser = {...prevUser, likedSnacks: newUserLikedSnacks, snacksLikesCount: newUserSnacksLikesCount}
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
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default AppContextProvider
