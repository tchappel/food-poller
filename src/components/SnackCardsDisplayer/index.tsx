import React from 'react'
import {ISnack} from "../../App";
import SnackCard from "../SnackCard";

interface IProps {
    dataSource: ISnack[]
    handleBtnLikeClick: (param:number) => void
}

const SnackCardsDisplayer = ({dataSource, handleBtnLikeClick}: IProps) => {
    if (!dataSource.length) return null
    return (
        <>
            {
                dataSource.map(snack => {
                    return (
                        <SnackCard
                            imgUrl={snack.imgUrl}
                            title={snack.name}
                            price={snack.price}
                            description={snack.description}
                            likesCount={snack.likesCount}
                            handleBtnLikeClick={ () => handleBtnLikeClick(snack.id)}
                        />
                    )
                })
            }
        </>
    )
}


export default SnackCardsDisplayer