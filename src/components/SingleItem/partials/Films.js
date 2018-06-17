import React from 'react';
import {connect} from "react-redux";

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
            this.state.films.length > 0 ? (
                <div>
                    <p>Films: </p>
                    <ol>
                        {this.state.films.map((film, index) => (
                            <li key={index}>"{film}"</li>
                        ))}
                    </ol>
                </div>
            ) : (
                <p>Films: loading...</p>
            )
        );
    }
}


function mapStateToProps(state) {
    return ({
        swCharacters: state.swCharacters
    })
}

export default connect(mapStateToProps)(Films);