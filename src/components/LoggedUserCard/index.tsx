import React from 'react'
import styled from 'styled-components'
import {AppContextConsumer} from "../../Context";

const UserName = styled.strong`
    color: white;
`

const LoggedUserCard = () => {
    return (
        <AppContextConsumer>
            {context => {
                if (context) {
                    const {user, maxLikes} = context.state
                    return (
                        <div className="media">
                            <figure className="media-left">
                                <p className="image is-32x32">
                                    <img className="is-rounded" src={user.imageUrl}/>
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
            }}
        </AppContextConsumer>
    )
}

export default LoggedUserCard