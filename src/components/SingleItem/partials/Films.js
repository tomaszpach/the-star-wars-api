import React from 'react';
import {connect} from "react-redux";

import Loader from './../../Loader';

class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: []
        }
    }

    fetchFilms(filmsURL) {
        let films = [];

        filmsURL.map((filmURL) => {
            fetch(filmURL)
                .then(response => response.json())
                .then(results => {
                    films.push(results.title);

                    this.setState({
                        films: films
                    })
                })
        });
    }

    componentDidMount() {
        this.fetchFilms(this.props.swCharacters.selected.films)
    }

    render () {
        return (
            // todo add loader
            <p>Films: {this.state.films.map((film) => film + ', ')}</p>
        );
    }
}


function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(Films);