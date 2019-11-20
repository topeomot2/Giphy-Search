import { SEARCH_API,
    loadPhotos,
    showLoader,
    hideLoader
} from './action';


export const searchTerm = ({dispatch}) => next => action => {

    if(action.type === SEARCH_API) {
        dispatch(loadPhotos([]));
        fetch('https://api.giphy.com/v1/gifs/search?api_key=kQ4xkQwzkKC0wwcpqIh1kZPf52Dd4pWC&q='+
        action.payload.searchTerm)
        .then(response => response.json())
        .then((data) => {
            dispatch(loadPhotos(data.data));
            dispatch(hideLoader());
        })
        .catch(error => {
            dispatch(loadPhotos([]));
            dispatch(hideLoader());
        })
        dispatch(showLoader());
    }

    next(action);
}

export const middleware = [searchTerm];