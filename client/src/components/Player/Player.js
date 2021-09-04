import React, { useState } from 'react';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUrl } from '../../actions/ytPlayer';
import ReactPlayer from 'react-player/youtube'


const Player = () => {
    const urlList = useSelector((state) => state.playlist);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false)


    let video_id = urlList[0] ? urlList[0].url.split('v=')[1] : '';
    const ampersandPosition = video_id.indexOf('&');
    if(video_id && ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
    }

    const handleEndVideo = () => {
        dispatch(deleteUrl(urlList[0]._id));
        setIsPlaying(false);
    };

    const handleVideoPlay = () => {
        alert('Please click on the video');
        setTimeout(() => {
            setIsPlaying(true);
          }, 5000);
        
    };

    return(
        <ReactPlayer
            key={video_id}
            muted = {!isPlaying} // workaround. See: https://github.com/CookPete/react-player#autoplay
            playing
            style={{ pointerEvents: 'none' }}
            url={`https://www.youtube.com/watch?v=${video_id}`}
            onEnded={handleEndVideo}
            onPlay={handleVideoPlay}
        />
    );
}

export default Player;