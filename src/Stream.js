import React from 'react'

const Stream = () => {
    return (
        <div>
          <div>
            <video
             
              id="my-video"
              className="video-js"
              controls
              preload="auto"
              autoPlay
              width="640"
              height="264"
              poster="MY_VIDEO_POSTER.jpg"
              data-setup="{}"
            >
              <source
                src="http://109.72.96.132:8080/hls/tvteuta/index.m3u8"
                type="application/x-mpegURL"
              />
            </video>
          
          </div>
        </div>
      );
}

export default Stream
