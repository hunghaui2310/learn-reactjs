import { useRef } from "react";
import Video from "./Video";

// Giúp tuỳ chỉnh được ref của 1 function component 
function HUseImperativeHandle() {

    const videoRef = useRef();

    const onPlay = () => {
        videoRef.current.play();
    }

    const onPause = () => {
        videoRef.current.pause();
    }

    return (
        <div>
            <Video ref={videoRef}/>
            <button onClick={onPlay}>Play</button>
            <button onClick={onPause}>Pause</button>
        </div>
    )
}

export default HUseImperativeHandle;