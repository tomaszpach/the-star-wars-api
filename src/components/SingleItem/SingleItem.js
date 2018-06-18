import React from 'react';
import {connect} from 'react-redux';

import Details from './partials/details';
import NothingFound from './partials/nothingFound';

class SingleItem extends React.Component {
    render() {
        let selected = this.props.swCharacters.selected;

        return (
            <div className='single-item'>
                {Object.keys(selected).length > 0 ? (
                    <Details selected={selected}/>
                ) : <NothingFound/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(SingleItem);