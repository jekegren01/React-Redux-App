const initialState = {
    lat: 'Placeholder',
    lng: 'Placeholder',
    error: '',
    sunrise: '',
    sunset: '',
    isFetching: false

};

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {...state, isFetching: true};
        case FETCHING_SUCCESS:
            return {...state, 
                    sunrise: action.payload,
                    sunset: action.payload,
                    isFetching: false
            };
        case FETCHING_FAILURE:
            return {...state, isFetching: false};
        default:
            return state;
    }
}