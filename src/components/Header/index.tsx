import React from 'react'
import styled from 'styled-components'
import LoggedUserCard from "../LoggedUserCard";
import LogButtons from "../HeaderButtons";

const Brand = styled.div`
    font-weight: bold;
    font-size: 24px;
`

const Header = () => {
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
                        <LoggedUserCard />
                    </div>
                    <div className="navbar-item">
                        <LogButtons/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header