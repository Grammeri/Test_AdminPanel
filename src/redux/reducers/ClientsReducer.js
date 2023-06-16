const initialState = { entities: [], loading: 'idle', error: null };

function clientsReducer(state = initialState, action) {
    switch (action.type) {
        case 'clients/fetch':
            return { ...state, loading: 'loading' };
        case 'clients/fetchSuccess':
            return { ...state, loading: 'idle', entities: action.payload };
        case 'clients/fetchError':
            return { ...state, loading: 'idle', error: action.payload };
        default:
            return state;
    }
}

export default clientsReducer;
