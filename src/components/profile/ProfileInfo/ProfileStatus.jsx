import React, {useState, useEffect} from "react";

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () =>{
        setStatus(props.status)
    }, [props.status] )

    let setEditModeValue = () => {setEditMode(true)}

    let unSetEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }

    let onChange = (e) =>{setStatus(e.target.value)}

        return (
            <>
                {!editMode &&
                    <span onDoubleClick={setEditModeValue}><b>Status</b>: {props.status !== null? props.status: "‎"}</span>
                }
                {editMode &&
                     <span><b>Status</b>:<input autoFocus={true} onBlur={unSetEditMode} onChange={onChange}
                         value={status}/></span>
                }
            </>
        )

}

export default ProfileStatus