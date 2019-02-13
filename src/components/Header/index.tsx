import React from 'react'
import styled from 'styled-components'
import LoggedUserCard from "../LoggedUserCard";
import {IUser} from "../../App";
import LogButtons from "../HeaderButtons";

interface IProps {
    user: IUser
    maxLikes: number
}

const Brand = styled.div`
    font-weight: bold;
    font-size: 24px;
`

const Header = ({user, maxLikes}: IProps) => {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Brand className="navbar-item">
                    BSS FoodPoll
                </Brand>
            </div>
            <div className="navbar-menu is-active">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <LoggedUserCard
                            user={user}
                            maxLikes={maxLikes}
                        />
                    </div>
                    <div className="navbar-item">
                        <LogButtons />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header