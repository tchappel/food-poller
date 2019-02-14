import React from 'react'
import styled from 'styled-components'
import LikeControls from "../LikeControls";
import AdminControls from "../AdminControls";
import {ISnack} from "../../appData";

interface IProps {
    snack: ISnack,
}

const StyledBox = styled.div`
    width: 360px;
    margin-right: auto;
`


const SnackCard = ({ snack }: IProps) => {

    return (
        <StyledBox className="box">
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={snack.imgUrl}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{snack.name}</strong>
                            <small>{snack.price} CZK</small>
                            <br/>
                            {snack.description}
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <AdminControls />
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <LikeControls
                        snack={snack}
                    />
                </div>
            </article>
        </StyledBox>
    )
}

export default SnackCard
