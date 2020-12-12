import React from "react";
import s from "../components/Users/users.module.css";
import Pagination from "react-js-pagination";

type PaginatorType = {
    currentPage: number
    setPageUsers: (number:number, pageNumber:number, term?:string) => void
    pageNumber?: number
    totalCount: number
    count: number
    pagesCount?: number
    currentTerm: string
}

class Paginator extends React.Component<PaginatorType, {currentPage:number}> {
    state = {
        currentPage: this.props.currentPage
    }

    pagesCount = Math.ceil(this.props.totalCount / this.props.count)
    handlePageChange = (pageNumber:number) =>{
        this.setState({currentPage:pageNumber}, () => {
            this.props.setPageUsers(7,pageNumber, this.props.currentTerm)
        });

    }
    render() {
        return (
            <div>
                <Pagination
                    itemClass = {s.listPage}
                    pageRangeDisplayed={10}
                    activePage = {this.state.currentPage}
                    itemsCountPerPage = {1}
                    totalItemsCount={this.pagesCount}
                    activeClass = {s.currentPage}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
    }
}
export default Paginator