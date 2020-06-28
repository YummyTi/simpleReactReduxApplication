import {SELECTED_SONG} from "../types/types";

const initialState = {
    songs: [
        {title: 'No Scrubs', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'Star way', duration: '3:05'},
        {title: 'new Star', duration: '1:35'},
    ],
    selectedSong: []
};

export const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_SONG:
            return {
                ...state,
                selectedSong: action.payload
            };
        default:
            return state
    }
};

