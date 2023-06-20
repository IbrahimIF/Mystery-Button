import { useNavigate } from "react-router-dom";
import React, { useState, useEffect,} from "react";
import "./RandomScreen.css";
function RandomScreen() {

  const navigate = useNavigate();

  // Media state
  const [media, setMedia] = useState(null);
  const [timeoutDuration, setTimeoutDuration] = useState(null);

  // Choose random media
  useEffect(() => {
    function chooseRandomMedia() {
      const mediaList = [
              // Media list (images and videos)
              { type: 'image', url: 'https://i.postimg.cc/mkgq17LH/giganigga.jpg' },

              { type: 'troll', url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png' },

              { type: 'snoopDog', url: 'https://www.youtube.com/embed/DJfg39WkMvE?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              

              { type: 'jackBlack', url: 'https://www.youtube.com/embed/ddWJatRxfz8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=50'},
              
              { type: 'video', url: 'https://www.youtube.com/embed/IGprEUpFmz0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/yUGZwlLoZh0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/K-bP87jsrW4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/h7FJ9ddRNdA?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/Z93msbCiHnM?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'video', url: 'https://www.youtube.com/embed/PGfhtLrwiKo?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1&start=7'},

              { type: 'short', url: 'https://www.youtube.com/embed/2gMemLkfYWY?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/iRTNUTcPZL4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/ny09IWBXVEo?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/MfA6NAha2K0?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/tY875eoXAj4?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/08XyCs4yVEU?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/SqE2J9V3a8A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/5edf0roC98A?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: 'https://www.youtube.com/embed/6eA4YXjOEnQ?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'short', url: '?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},

              // Add more images and YouTube links to the list
      ];

      const randomIndex = Math.floor(Math.random() * mediaList.length);
      const media = mediaList[randomIndex];

      if (media.type === 'image') {
        setTimeoutDuration(3000); // Set the timeout to 3 seconds
        return (
          <div>
            <img width="900" height="655" src={media.url} alt="random" />
          </div>
        );
      } else if (media.type === 'troll') {
        setTimeoutDuration(1000); // Set the timeout to 1 seconds
        return (
          <div>
            <img width="900" height="655" src={media.url} alt="random" />
          </div>
        );
      }else if (media.type === 'snoopDog') {
        setTimeoutDuration(80200); // Set the timeout to 1 seconds
        return (
          <div>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      }else if (media.type === 'longer') {
        setTimeoutDuration(1000); // Set the timeout to 1 seconds
        return (
          <div>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'video') {
        setTimeoutDuration(15000); // Set the timeout to 15 seconds
        return (
          <div style={{ pointerEvents: 'none' }}>
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow=" autoplay;  encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'Normal') {
        setTimeoutDuration(15000); // Set the timeout to 15 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'shorter') {
        setTimeoutDuration(9000); // Set the timeout to 8 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
      } else if (media.type === 'jackBlack') {
        setTimeoutDuration(33000); // Set the timeout to 33 seconds
        return (
          <div style={{ pointerEvents: 'none' }} >
            <iframe width="900" height="655" src={media.url} title="YouTube video player" allow="autoplay; encrypted-media;"></iframe>
          </div>
        );
        } 
    }

    setMedia(chooseRandomMedia());
  }, []);

  // Set the timeout based on the selected media type
  useEffect(() => {
    if (timeoutDuration !== null) {
      const timer = setTimeout(() => {
        navigate("/Button");
        
      }, timeoutDuration);

      // Cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeoutDuration, navigate]);

  // Refresh media on click
  function refreshMedia() {
    setMedia(null);
  }

return(
<div className="container3">
<div className="media" onClick={refreshMedia}>
        {media}
      </div>
    </div>
);
}
export default RandomScreen;