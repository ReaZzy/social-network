import React from "react";
import s from "../components/Users/users.module.css";
import Pagination from "react-js-pagination";

class Paginator extends React.Component {
    state = {
        currentPage: this.props.currentPage
    }
    pagesCount = Math.ceil(this.props.totalCount / this.props.count)
    handlePageChange = (pageNumber) =>{
        this.setState({currentPage:pageNumber}, () => {
            this.props.setPageUsers(7,pageNumber)
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
                    pageCount = {this.pagesCount}
                    activeClass = {s.currentPage}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        )
    }
}
export default Paginator