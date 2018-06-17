import React from 'react';
import {connect} from 'react-redux';
import {
    Link
} from 'react-router-dom';
import {Button} from 'react-bootstrap';

import Name from './partials/name';
import HeightGender from './partials/heightGender';
import Films from './partials/Films';

class SingleItem extends React.Component {
    render() {
        let selected = this.props.swCharacters.selected;

        return (
            <div className='single-item'>
                {Object.keys(selected).length > 0 ? (
                        <div className='details'>
                            <Name details={selected}/>
                            <HeightGender details={selected}/>
                            <Films/>
                            <Link to='/'>
                                <Button>Back to Home</Button>
                            </Link>
                        </div>
                    ) :
                    <div>
                        <p>
                            Nothing selected. Please go back to <Link to='/'>Homepage</Link> and select character to see
                            details.
                        </p>
                        <div>
                            <Link to='/'>
                                <Button>Back to Home</Button>
                            </Link>
                        </div>
                    </div>
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