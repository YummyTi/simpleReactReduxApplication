import React from "react";
import Songs from "./Songs";
import SongDetail from './SongDetail';

const SongPage = () => {
    return(
        <div className='ui container grid'>
            <div className='ui row' style={{marginTop: '100px'}}>
                <div className='column eight wide'>
                    <Songs />
                </div>
                <div className='column eight wide'>
                    <SongDetail />
                </div>
            </div>
        </div>
    )
};

export default SongPage;