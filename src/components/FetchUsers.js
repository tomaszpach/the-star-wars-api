import React from 'react';
import {connect} from "react-redux";

// todo remove console.logs

class FetchUsers extends React.Component {
    fetchUsers() {
        let page = this.props.swCharacters.page || 1;

        // todo take page number from URL
        fetch(`https://swapi.co/api/people/?page=${page}`)
            .then(response => response.json())
            .then(results => {
                console.log('results', results);
                this.props.dispatch({
                    type: 'FETCH_USERS',
                    results: results
                });
            })
    }

    componentDidMount() {
        this.fetchUsers();
        console.log(this.props.swCharacters.page)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.swCharacters.page !== this.props.swCharacters.page) {
            this.fetchUsers();
        }
    }

    render() {
        return (
            // todo check if this have to be here
            <h2>The Star Wars characters:</h2>
        )
    }
}

function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(FetchUsers)