import search from 'youtube-api-search';

export function doSearch(term) {
    const key =  `AIzaSyB4f6luRyh7FJkfrCC3QwCr-VvgntIJ6vU`;

    return dispatch => {
        search({ key, term }, videos => {
            dispatch({
                type: 'CHANGE_SELECTED_VIDEO',
                payload: videos[0]
            })
            dispatch({
                type: 'SEARCH_VIDEOS_SUCCESS',
                payload: videos
            })
         })
    }
};
