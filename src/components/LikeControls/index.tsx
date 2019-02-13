import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown, faThumbsUp as likeIcon} from "@fortawesome/free-regular-svg-icons";
import {faCircle, faThumbsUp as likeIconSolid} from "@fortawesome/free-solid-svg-icons";

interface IProps {
    likesCount: number
    handleBtnLikeClick: () => void
}

const LikeControls = ({likesCount, handleBtnLikeClick}: IProps) => {
    return (
        <div>
            <a
                className="icon is-small"
                onClick={handleBtnLikeClick}
            >
                <FontAwesomeIcon title={"like"} icon={likeIcon} color="blue"/>
            </a>
            <br/>
            <a className="icon is-small">
                <FontAwesomeIcon title={"like"} icon={faThumbsDown} color="red"/>
            </a>
            <br/>
            <span className="fa-layers fa-fw icon is-small">
                            <FontAwesomeIcon icon={faCircle} color="blue"/>
                            <FontAwesomeIcon icon={likeIconSolid} color="white" size="xs"/>
                        </span>
            <small>{likesCount}</small>
        </div>
    )
}

export default LikeControls