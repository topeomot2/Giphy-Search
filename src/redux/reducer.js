import { SEARCH_API,
    LOAD_PHOTOS,
    SHOW_LOADER,
    HIDE_LOADER
} from './action';


const initialLoginState = {
    searchTerm: null,
    photos: [],
    pending: false
}

function searchReducer(state = initialLoginState, action) {
    switch (action.type) {
        case SEARCH_API:
            return {...state, searchTerm: action.payload.searchTerm};
        case LOAD_PHOTOS:
            return {...state, photos: action.payload.results};
        case SHOW_LOADER:
            return {...state, pending: true};
        case HIDE_LOADER:
            return {...state, pending: false};    
        default:
            return state;
    }
}



export default searchReducer;