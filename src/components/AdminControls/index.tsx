import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-regular-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const AdminControls = () => {
    return (
        <>
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
        </>
    )
}

export default AdminControls