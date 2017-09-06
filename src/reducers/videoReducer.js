export function searchVideo(state = [], action) {
    switch (action.type) {
        case "SEARCH_VIDEOS_SUCCESS":
            return action.payload
    
        default:
            return state;
    }
}

export function selectedVideo(state = {}, action) {
    switch (action.type) {
        case "CHANGE_SELECTED_VIDEO":
            return action.payload
    
        default:
            return state;
    }
}
