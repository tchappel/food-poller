import React from 'react'
import styled from 'styled-components'
import {IUser} from "../../App";

interface IProps {
    user: IUser
    maxLikes: number
}

const UserName = styled.strong`
    color: white;
`


const LoggedUserCard = ({user, maxLikes}: IProps) => {
    return (
        <div className="media">
            <figure className="media-left">
                <p className="image is-32x32">
                    <img className="is-rounded" src={user.imageUrl} />
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <UserName>{user.name}</UserName>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <small>{maxLikes - user.snacksLikesCount} likes left</small>
            </div>
        </div>
    )
}

export default LoggedUserCard