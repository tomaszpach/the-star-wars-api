import React from 'react';
import {connect} from 'react-redux';
import {
    Link
} from 'react-router-dom';

class ResultsList extends React.Component {

    nameClick(item, index) {
        this.props.dispatch({
            type: 'SELECTED_CHARACTER',
            selected: item,
            index: index
        });
    }


    render() {
        let results = this.props.swCharacters.results.results,
            isLoading = this.props.swCharacters.isLoading;

        return (
            !isLoading ? (
                // todo rebuild this to better table view?
                // todo add LINK's and onClick actions
                <div className='characters-table'>
                    <div className='name-column column'>
                        <h4>Name</h4>
                        {
                            results.map((item, index) => {
                                return (
                                    <Link to="/people/" onClick={() => this.nameClick(item, index)} key={index} className='name detail'>
                                        {item.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className='height-column column'>
                        <h4>Height</h4>
                        {
                            results.map((item, index) => {
                                return (
                                    <div key={index} className='height detail'>
                                        {item.height}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='gender-column column'>
                        <h4>Gender</h4>
                        {
                            results.map((item, index) => {
                                return (
                                    <div key={index} className='gender detail'>
                                        {item.gender}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            ) : (
                <div className='loader'>
                    <div className="lds-roller">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
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