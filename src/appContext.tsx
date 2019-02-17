import React, {Component, ReactNode} from 'react'
import {appData, appFunctions, IAppData, ISnack, IUser} from "./appData";
import {replacePropertyInObject} from "./common/objectUtils";
import {addItemToArray, removeItemInArray, replaceItemInArray} from "./common/arrayUtils";

interface IContext extends IAppData {
    addLikeToSnack: (snack: ISnack) => void
    removeLikeFromSnack: (snack: ISnack) => void
}

interface IProps {
    children: ReactNode
}

const appContext = React.createContext<IContext>({...appData, ...appFunctions});

export const AppContextConsumer = appContext.Consumer;

export class AppContextProvider extends Component<IProps, IAppData> {
    state = appData

    private hasUserHasRemainingLikes = (state: IAppData): boolean => {
        const {user, maxLikes} = state
        return user.likedSnacks.length < maxLikes
    }

    private addLikeToSnack = (snack: ISnack) => {
        if (!this.hasUserHasRemainingLikes(this.state)) {
            alert('you reached the maximum number of likes!!!')
            return
        }
        this.setState((state) => {
            const {user, snacks} = state
            const newUserLikedSnacks = addItemToArray(user.likedSnacks, snack.id)
            const newUser = replacePropertyInObject(user, 'likedSnacks' , newUserLikedSnacks)
            const newSnackLikesCount = snack.likesCount + 1
            const snackIndex = snacks.findIndex(el => el.id === snack.id)
            const newSnack = replacePropertyInObject(snack, 'likesCount', newSnackLikesCount)
            const newSnacks = replaceItemInArray(snacks, newSnack, snackIndex)
            return {
                user: newUser,
                snacks: newSnacks
            }
        })
    }
    private removeLikeFromSnack = (snack: ISnack) => {
        const {likedSnacks} = this.state.user
        if (!likedSnacks.length || !likedSnacks.includes(snack.id)) {
            alert('no more previous likes to be removed!')
            return
        }
        if (likedSnacks.includes(snack.id)) {
            this.setState(state => {
                const {user, snacks} = state
                const newUserLikedSnacks = removeItemInArray(
                    likedSnacks,
                    snack.id,
                    likedSnacks.indexOf(snack.id)
                )
                const newUser = replacePropertyInObject(
                    user,
                    'likedSnacks',
                    newUserLikedSnacks
                )
                const newSnack = replacePropertyInObject(
                    snack,
                    'likesCount',
                    snack.likesCount - 1
                )
                const newSnacks = replaceItemInArray(
                    snacks,
                    newSnack,
                    snacks.findIndex(item => item.id === snack.id)
                )
                return {
                    user: newUser,
                    snacks: newSnacks
                }

            })
        }
    }

    render() {
        return (
            <appContext.Provider value={{
                ...this.state,
                addLikeToSnack: this.addLikeToSnack,
                removeLikeFromSnack: this.removeLikeFromSnack
            }}>
                {this.props.children}
            </appContext.Provider>
        )
    }
}

export default AppContextProvider
