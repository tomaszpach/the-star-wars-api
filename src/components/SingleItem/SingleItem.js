import React from 'react';
import {connect} from 'react-redux';
import {
    Link
} from 'react-router-dom';

import Name from './partials/name';
import HeightGender from './partials/heightGender';
import Films from './partials/Films';

class SingleItem extends React.Component {
    render() {
        let selected = this.props.swCharacters.selected;

        return (
            // todo finish this one
            <div className='single-item'>
                {Object.keys(selected).length > 0 ? (
                    <div className='details'>
                        <Name details={selected}/>
                        <HeightGender details={selected} />
                        <Films/>
                        <Link to='/'>Back to Home</Link>
                    </div>
                ) : <div>Nothing selected. Please go back to <Link to='/'>homepage</Link></div>}
            </div>
            // todo add back button
        );
    }
}

function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(SingleItem);