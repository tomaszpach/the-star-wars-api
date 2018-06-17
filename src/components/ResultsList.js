import React from 'react';
import {connect} from 'react-redux';
import {
    Link
} from 'react-router-dom';
import { Table } from 'react-bootstrap';

import Loader from './Loader'

class ResultsList extends React.Component {
    // todo change that function name
    nameClick(item) {
        this.props.dispatch({
            type: 'SELECTED_CHARACTER',
            selected: item
        });
    }

    render() {
        let results = this.props.swCharacters.results.results,
            isLoading = this.props.swCharacters.isLoading;

        return (
            !isLoading ? (
                <div className='characters-table'>
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
                            results.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td onClick={() => this.nameClick(item)}>
                                            <Link to='/people/'>{item.name}</Link>
                                        </td>
                                        <td onClick={() => this.nameClick(item)}>
                                            <Link to='/people/'>{item.height}</Link>
                                        </td>
                                        <td onClick={() => this.nameClick(item)}>
                                            <Link to='/people/'>{item.gender}</Link>
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