import React, {useState, useEffect} from "react";


type PropsType = {
    statusProps: string
    updateStatus: ( status:string) =>void
}

const ProfileStatus:React.FC<PropsType> = ({statusProps, updateStatus}) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState<string>(statusProps)

    useEffect( () =>{
        setStatus(statusProps)
    }, [statusProps] )

    let setEditModeValue = () => {setEditMode(true)}

    let unSetEditMode = () =>{
        setEditMode(false)
        updateStatus(status)
    }

    let onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{setStatus(e.target.value)}

        return (
            <>
                {!editMode &&
                    <span onDoubleClick={setEditModeValue}><b>Status</b>: {statusProps !== null? statusProps: "‎"}</span>
                }
                {editMode &&
                     <span><b>Status</b>:<input autoFocus={true} onBlur={unSetEditMode} onChange={onChange}
                         value={status}/></span>
                }
            </>
        )

}

export default ProfileStatus