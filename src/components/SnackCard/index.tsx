import React from 'react'
import styled from 'styled-components'
import LikeControls from "../LikeControls";
import AdminControls from "../AdminControls";

interface IProps {
    imgUrl: string,
    title: string,
    price: number | string,
    description: string,
    likesCount: number,
    handleBtnLikeClick: () => void
}

const StyledBox = styled.div`
    width: 360px;
    margin-right: auto;
`


const SnackCard = ({imgUrl, title, price, description, likesCount, handleBtnLikeClick}: IProps) => {

    return (
        <StyledBox className="box">
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={imgUrl}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{title}</strong>
                            <small>{price} CZK</small>
                            <br/>
                            {description}
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
                        likesCount={likesCount}
                        handleBtnLikeClick={handleBtnLikeClick}
                    />
                </div>
            </article>
        </StyledBox>
    )
}

export default SnackCard
