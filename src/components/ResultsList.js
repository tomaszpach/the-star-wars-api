import React from 'react';
import {connect} from 'react-redux';
import {
    Link
} from 'react-router-dom';
import {Table} from 'react-bootstrap';

import Loader from './Loader'

class ResultsList extends React.Component {
    dispatchSelectedChar(item) {
        this.props.dispatch({
            type: 'SELECTED_CHARACTER',
            selected: item
        });
    }

    render() {
        let { results, isLoading, page } = this.props.swCharacters;

        return (
            !isLoading ? (
                <div>
                    <Table striped bordered condensed hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Height</th>
                            <th>Gender</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            results.results.map((item, index) => {
                                let id = (10 * (page - 1)) + index + 1;
                                return (
                                    <tr key={index}>
                                        <td onClick={() => this.dispatchSelectedChar(item)}>
                                            <Link to={`/people/` + id + `/`}>{item.name}</Link>
                                        </td>
                                        <td onClick={() => this.dispatchSelectedChar(item)}>
                                            <Link to={`/people/` + id + `/`}>{item.height}</Link>
                                        </td>
                                        <td onClick={() => this.dispatchSelectedChar(item)}>
                                            <Link to={`/people/` + id + `/`}>{item.gender}</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </div>
            ) : (
                <Loader/>
            )
        );
    }
}

function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(ResultsList);