import React, {Component} from 'react'
import {appData, appFunctions, IAppData} from "./appData";

interface IContext extends IAppData {
    handleBtnLikeClick: (id: number) => void
    handleBtnRemoveLikeClick: (id: number) => void
}

interface IProps {
    children: any
}

const context = React.createContext<IContext>({...appData, ...appFunctions});

export const AppContextConsumer = context.Consumer;

export class AppContextProvider extends Component<IProps, IAppData> {
    state = appData
    private handleBtnLikeClick = (id: number) => {
        if (this.state.user.likedSnacks.length === this.state.maxLikes) {
            alert('you reached the maximum number of likes!!!')
            return
        }
        this.setState((state) => {
            const user = state.user
            const newUserLikedSnacks = user.likedSnacks.concat([id])
            const newUser = {...user, likedSnacks: newUserLikedSnacks}
            const snackIndex = state.snacks.findIndex(snack => snack.id === id);
            const prevSnack = state.snacks[snackIndex]
            const newSnack = {...prevSnack, likesCount: prevSnack.likesCount + 1}
            const newSnacks = [
                ...state.snacks.slice(0, snackIndex),
                newSnack,
                ...state.snacks.slice(snackIndex + 1)
            ]

            return {
                user: newUser,
                snacks: newSnacks
            }
        })
    }
    private handleBtnRemoveLikeClick = (id: number) => {
        const {likedSnacks} = this.state.user
        if (!likedSnacks.length || !likedSnacks.includes(id)) {
            alert('no more previous likes to be removed!')
            return
        }
        if (likedSnacks.includes(id)) {
            this.setState(state => {
                const {user, snacks} = state
                const index = likedSnacks.indexOf(id)
                const newLikedSnacks = [
                    ...likedSnacks.slice(0, index),
                    ...likedSnacks.slice(index + 1)
                ]
                const newUser = {...user, likedSnacks: newLikedSnacks}
                const snackIndex = snacks.findIndex(snack => snack.id === id);
                const prevSnack = snacks[snackIndex]
                const newSnack = {...prevSnack, likesCount: prevSnack.likesCount - 1}
                const newSnacks = [
                    ...snacks.slice(0, snackIndex),
                    newSnack,
                    ...snacks.slice(snackIndex + 1)
                ]
                return {
                    user: newUser,
                    snacks: newSnacks
                }

            })
        }
    }

    render() {
        return (
            <context.Provider value={{
                ...this.state,
                handleBtnLikeClick: this.handleBtnLikeClick,
                handleBtnRemoveLikeClick: this.handleBtnRemoveLikeClick
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default AppContextProvider
