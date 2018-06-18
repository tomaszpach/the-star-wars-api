const initialState = {
    page: 1,
    isLoading: true,
    selected: {},
    results: {}
};

export default function swCharacters(state = initialState, action) {
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
                selected: action.selected
            };

        default:
            return state;
    }
}