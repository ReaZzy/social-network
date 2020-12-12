import * as React from "react";
import {BsSearch} from "react-icons/bs";
import s from "./searchForm.module.css"
import {reduxForm, Field} from "redux-form";
type PropsType = {
    handleSubmit:any
}

const SearchForm1:React.FC<PropsType> = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <div className={s.search}>
                <Field component={"textarea"} name={"searchField"} className={s.searchTextArea} cols={78} rows={1}/>
                <button className={s.searchButton}><BsSearch/></button>
            </div>
        </form>
    )
}

const SearchForm = reduxForm<PropsType>({form:"search-form"})(SearchForm1)


export default SearchForm
