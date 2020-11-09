import React from "react";
import loading from "../../../media/images/loading.svg";
import s from "../../Users/users.module.css";

const Preloader = () =>{
    return(
        <img src={loading} alt ="" className={s.loading}/>
    )
}
export default Preloader