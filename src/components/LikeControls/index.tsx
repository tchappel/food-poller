import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsDown, faThumbsUp as likeIcon} from "@fortawesome/free-regular-svg-icons";
import {faCircle, faThumbsUp as likeIconSolid} from "@fortawesome/free-solid-svg-icons";
import {ISnack} from "../../appData";
import {AppContextConsumer} from "../../appContext";

interface IProps {
    snack: ISnack
}

const LikeControls: React.FunctionComponent<IProps> = ({snack}) => (
        <AppContextConsumer>
            {context => (
                <div>
                    <a
                        className="icon is-small"
                        onClick={() => context.addLikeToSnack(snack)}
                    >
                        <FontAwesomeIcon title={"like"} icon={likeIcon} color="blue"/>
                    </a>
                    <br/>
                    <a
                        className="icon is-small"
                        onClick={() => context.removeLikeFromSnack(snack)}
                    >
                        <FontAwesomeIcon title={"like"} icon={faThumbsDown} color="red"/>
                    </a>
                    <br/>
                    <span className="fa-layers fa-fw icon is-small">
                            <FontAwesomeIcon icon={faCircle} color="blue"/>
                            <FontAwesomeIcon icon={likeIconSolid} color="white" size="xs"/>
                        </span>
                    <small>{snack.likesCount}</small>
                </div>
            )}
        </AppContextConsumer>
    )

export default LikeControls