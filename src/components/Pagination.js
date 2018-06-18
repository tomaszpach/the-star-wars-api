import React from 'react';
import {connect} from "react-redux";
import {
    Link
} from 'react-router-dom';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: this.props.swCharacters.page || 0
        }
    }

    getPages() {
        let count = parseInt(this.props.swCharacters.results.count);
        return (count / 10);
    }

    dispatchPaginationChange(e) {
        this.props.dispatch({
            type: 'CHANGE_PAGE',
            isLoading: true,
            page: parseInt(e.target.dataset.page)
        });
        this.updateActivePageState(e);
    }

    updateActivePageState(e) {
        this.setState({
            activePage: parseInt(e.target.dataset.page)
        });
    }

    createPagination() {
        let rows = [],
            pages = this.getPages();

        for (let i = 0; i < pages; i++) {
            let pageId = i + 1;
            rows.push(
                <li key={i} className='page-item'>
                    <Link to={`/page/` + pageId + `/`} onClick={(e) => this.dispatchPaginationChange(e)} data-page={i + 1} className={i + 1 === this.state.activePage ? 'page-link active' : 'page-link'}>{i + 1}</Link>
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