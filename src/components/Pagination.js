import React from 'react';
import {connect} from "react-redux";

class Pagination extends React.Component {
    getPages() {
        let count = this.props.swCharacters.results.count;

        // todo check why this is underscored
        return parseInt(count / 10) + 1;
    }

    paginationClick(e) {
        this.props.dispatch({
            type: 'CHANGE_PAGE',
            isLoading: true,
            page: e.target.dataset.page
        });
    }

    getPagination() {
        let rows = [],
            pages = this.getPages();

        for (let i = 0; i < pages; i++) {
            rows.push(<li key={i} className='page-item'>
                <a onClick={(e) => this.paginationClick(e)} data-page={i + 1} className='page-link'>{i +1}</a>
            </li>);
        }

        return <div className='pagination'>{rows}</div>;
    }

    render() {
        return (
            // todo add active page indicator
            <div className='pagination-wrapper'>
                {this.getPagination()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(Pagination)