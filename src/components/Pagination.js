import React from 'react';
import {connect} from "react-redux";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: this.props.swCharacters.page || 0
        }
    }

    getPages() {
        let count = parseInt(this.props.swCharacters.results.count);
        return (count / 10) + 1;
    }

    paginationClick(e) {
        this.props.dispatch({
            type: 'CHANGE_PAGE',
            isLoading: true,
            page: parseInt(e.target.dataset.page)
        });
        this.updateState(e);
    }

    // todo change name of this function
    updateState(e) {
        this.setState({
            activePage: parseInt(e.target.dataset.page)
        });
    }

    createPagination() {
        let rows = [],
            pages = this.getPages();

        // todo make pagination disabled after click. enabled when loaded
        for (let i = 0; i < pages; i++) {
            rows.push(
                <li key={i} className='page-item'>
                    <a onClick={(e) => this.paginationClick(e)} data-page={i + 1} className={i + 1 === this.state.activePage ? 'page-link active' : 'page-link'}>{i + 1}</a>
                </li>
            );
        }

        return <div className='pagination'>{rows}</div>;
    }

    render() {
        return (
            <div className='pagination-wrapper'>
                {this.createPagination()}
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