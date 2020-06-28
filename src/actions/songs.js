import {SELECTED_SONG} from "../types/types";

export const selectSong = (song) => {
    return{
        type: SELECTED_SONG,
        payload: song
    }
};
