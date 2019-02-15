import React, {Component, ReactNode} from 'react'
import {appData, appFunctions, IAppData, ISnack, IUser} from "./appData";

interface IContext extends IAppData {
    addLikeToSnack: (snack: ISnack) => void
    removeLikeFromSnack: (snack: ISnack) => void
}

interface IProps {
    children: ReactNode
}

const context = React.createContext<IContext>({...appData, ...appFunctions});

export const AppContextConsumer = context.Consumer;

export class AppContextProvider extends Component<IProps, IAppData> {
    state = appData

    private replacePropertyInObject = <T extends {}>(obj: T, property: string, value: any): T => {
        return {...obj, ...{[property]: value}}
    }

    private replaceItemInArray = <T extends {}>(arr: T[], item: T, itemIndex: number): T[] => {
        return [
            ...arr.slice(0, itemIndex),
            item,
            ...arr.slice(itemIndex + 1)
        ]
    }

    private removeItemInArray = <T extends {}>(arr: T[], item: T, itemIndex: number): T[] => {
        return [
            ...arr.slice(0, itemIndex),
            ...arr.slice(itemIndex + 1)
        ]
    }

    private addItemToArray = <T extends {}>(arr: T[], item: T): T[] => {
        return arr.concat([item])
    }

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
            const newUserLikedSnacks = this.addItemToArray(user.likedSnacks, snack.id)
            const newUser = this.replacePropertyInObject(user, 'likedSnacks' , newUserLikedSnacks)
            const newSnackLikesCount = snack.likesCount + 1
            const snackIndex = snacks.findIndex(el => el.id === snack.id)
            const newSnack = this.replacePropertyInObject(snack, 'likesCount', newSnackLikesCount)
            const newSnacks = this.replaceItemInArray(snacks, newSnack, snackIndex)
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
                const newUserLikedSnacks = this.removeItemInArray(
                    likedSnacks,
                    snack.id,
                    likedSnacks.indexOf(snack.id)
                )
                const newUser = this.replacePropertyInObject(
                    user,
                    'likedSnacks',
                    newUserLikedSnacks
                )
                const newSnack = this.replacePropertyInObject(
                    snack,
                    'likesCount',
                    snack.likesCount - 1
                )
                const newSnacks = this.replaceItemInArray(
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
            <context.Provider value={{
                ...this.state,
                addLikeToSnack: this.addLikeToSnack,
                removeLikeFromSnack: this.removeLikeFromSnack
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default AppContextProvider
