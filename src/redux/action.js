export const SEARCH_API = 'SEARCH_API';
export const LOAD_PHOTOS = 'FETCH_SEARCH_SUCCESS';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const searchApi = (searchTerm) => {
    return {
        type: SEARCH_API,
        payload: {
            searchTerm
        }
    };
}

export const loadPhotos = (results) => {
    return {
        type: LOAD_PHOTOS,
        payload: {
            results
        }
    };
}

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    };
}

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    };
}