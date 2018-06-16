import React from 'react';
import {connect} from 'react-redux';

class SingleItem extends React.Component {
    // todo remove state if not needed
    constructor(props) {
        super(props);
        this.state = ({
            open: false
        })
    }


    // todo clean console.logs
    render() {
        let selected = this.props.swCharacters.selected;
        console.log(selected);
        console.log(this.props.swCharacters.index);

        return (
            // todo finish this one
            <div className='single-item'>
                {Object.keys(selected).length > 0 ? (
                    <div className='details'>
                        <h2>{selected.name}</h2>
                        <p>Height: {selected.height}, gender: {selected.gender}</p>
                        <p>Films: {selected.films}</p>
                    </div>
                ) : null}
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