import React from 'react';
import {connect} from "react-redux";

// todo add cache / localStorage for fetched data
class FetchUsers extends React.Component {
    fetchUsers(page) {
        fetch(`https://swapi.co/api/people/?page=${page}`)
            .then(response => response.json())
            .then(results => {
                this.props.dispatch({
                    type: 'FETCH_USERS',
                    results: results
                });
            });
    }

    getPageFromUrl() {
        let href = window.location.href,
            split = href.split('/');

        this.fetchUsers(split[4] || 1);
    }

    componentDidMount() {
        this.getPageFromUrl();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.swCharacters.page !== this.props.swCharacters.page) {
            this.getPageFromUrl();
        }
    }

    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(FetchUsers)