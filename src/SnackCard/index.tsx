import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faThumbsUp as likeIcon} from '@fortawesome/free-regular-svg-icons'
import {faThumbsUp as likeIconSolid} from '@fortawesome/free-solid-svg-icons'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import {faThumbsDown} from '@fortawesome/free-regular-svg-icons'


interface IProps {
    imgUrl: string,
    title: string,
    price: number | string,
    description: string,
    likesCount: number,
}

const SnackCard = ({imgUrl, title, price, description, likesCount}: IProps) => {
    return (
        <div className="box">
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
                            <a className="level-item">
                                <span className="icon is-small">
                                    <FontAwesomeIcon title={"edit"} icon={faEdit}/>
                                </span>
                            </a>
                            <a className="level-item">
                                <span className="icon is-small">
                                    <FontAwesomeIcon title={"delete"} icon={faTrash}/>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="media-right">
                    <div>
                        <a className="icon is-small">
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
                        </span> <small>{likesCount}</small>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default SnackCard
