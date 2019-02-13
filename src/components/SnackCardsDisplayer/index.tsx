import React from 'react'
import {ISnack} from "../../App";
import SnackCard from "../SnackCard";

interface IProps {
    snacks: ISnack[]
    handleBtnLikeClick: (param:number) => void
}

const SnackCardsDisplayer = ({snacks, handleBtnLikeClick}: IProps) => {
    if (!snacks.length) return null
    return (
        <>
            {
                snacks.map(snack => {
                    return (
                        <SnackCard
                            snack={snack}
                            handleBtnLikeClick={ () => handleBtnLikeClick(snack.id)}
                            key={snack.id}
                        />
                    )
                })
            }
        </>
    )
}


export default SnackCardsDisplayer