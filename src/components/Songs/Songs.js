import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectSong} from "../../actions/songs";

const Songs = () => {
    const songs = useSelector(state => state.songs);
    const dispatch = useDispatch();


    return (
        <div>
            {songs && songs.songs.map(song => {
                return (
                    <div className='ui divided list' key={song.title}>
                        <div className='item'>
                            <div className='right floated content'>
                                <button className='ui button primary' onClick={() => dispatch(selectSong(song))}>
                                    Select
                                </button>
                            </div>
                            <div className='content'>
                                {song.title}
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
};

export default Songs;