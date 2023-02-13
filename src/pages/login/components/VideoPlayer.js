import React from 'react';

function VideoPlayer() {
    return (
        <iframe width="368" height="240" src="https://www.youtube.com/embed/lcOxhH8N3Bo" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen title={"song"}></iframe>

    );
}

export default VideoPlayer;
