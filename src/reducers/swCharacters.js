const initialState = {
    page: 1,
    isLoading: true,
    // todo check how can I send index in other way
    index: 0,
    selected: {},
    results: {}
};

export default function swCharacters(state = initialState, action) {
    // console.log('state', state);
    // console.log('action', action);
    switch (action.type) {
        case 'FETCH_USERS':
            return {
                ...state,
                isLoading: false,
                results: action.results
            };

        case 'CHANGE_PAGE':
            return {
                ...state,
                isLoading: true,
                page: action.page
            };

        case 'SELECTED_CHARACTER':
            return {
                ...state,
                selected: action.selected,
                index: action.index
            };

        default:
            return state;
    }
}