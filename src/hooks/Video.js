import video from '../videos/room.mp4';
import { forwardRef, useImperativeHandle, useRef } from 'react';

function Video(props, ref) {

    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        }
    }));

    return (
        <video 
        ref={videoRef}
        height={500} 
        src={video}/>
    )
}

export default forwardRef(Video);