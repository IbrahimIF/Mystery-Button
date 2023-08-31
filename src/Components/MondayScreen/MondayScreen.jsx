import { useNavigate } from "react-router-dom";
import React, { useState, useEffect,} from "react";
import "./MondayScreen.css";


function MondayScreen() {

  const navigate = useNavigate();
  // Media state
  const [media, setMedia] = useState(null);
  const [timeoutDuration, setTimeoutDuration] = useState(null);

  // Choose random media
  useEffect(() => {
    function chooseRandomMedia() {
      const mediaList = [
              // Media list (images and videos)

              { type: 'cat', url: 'https://www.youtube.com/embed/zOYJDdqDhR8?autoplay=1&controls=0&disablekb=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&rel=0&showinfo=1'},
              { type: 'cat', url: 'video'},
              { type: 'cat', url: 'video'},
              { type: 'cat', url: 'video'},
              { type: 'cat', url: 'video'},
              { type: 'cat', url: 'video'},
              { type: 'cat', url: 'video'},
              // Add more images and YouTube links to the list
      ];

      const randomIndex = Math.floor(Math.random() * mediaList.length);
      const media = mediaList[randomIndex];





      if (media.type === 'cat') {
        setTimeoutDuration(10000); // Set the timeout to 10 seconds
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
          navigate("/Start");
      }, timeoutDuration);

      // Cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeoutDuration, navigate]);


return(
<div className="container4">
<div className="media2">
        {media}
      </div>
    </div>
);
}
export default MondayScreen;