import React from "react";
import {useSelector} from "react-redux";

const SongDetail = () => {
    const selectedSong = useSelector(state => state.songs.selectedSong);

    return (
        <div>
            <h1>{selectedSong.title}</h1>
            {selectedSong.title && <hr/>}
            <p>{selectedSong.duration}</p>
        </div>
    )
};

export default SongDetail;