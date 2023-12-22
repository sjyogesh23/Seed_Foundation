import React, { useState, useRef } from 'react';
export const RelatedVideo = ({ videos = [] }) => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const scrollAmount = 700; // Adjust this value based on your preference

    if (direction === 'left') {
      scrollContainer.scrollTo({
        left: scrollContainer.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });} else if (direction === 'right') {
        scrollContainer.scrollTo({
          left: scrollContainer.scrollLeft + scrollAmount,
          behavior: 'smooth',
        });    }

    setScrollPosition(scrollContainer.scrollLeft);
  };

  const dummyVideos = [
    { id: 1, title: 'Video 1', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 2, title: 'Video 2', url: 'https://www.youtube.com/watch?v=oDeomjlXa94' ,image:'#'},
    { id: 3, title: 'Video 3', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
    { id: 4, title: 'Video 4', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 5, title: 'Video 5', url: 'https://www.youtube.com/watch?v=oDeomjlXa94',image:'#' },
    { id: 6, title: 'Video 6', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
    { id: 7, title: 'Video 7', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 8, title: 'Video 8', url: 'https://www.youtube.com/watch?v=oDeomjlXa94' ,image:'#'},
    { id: 9, title: 'Video 9', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
    { id: 10, title: 'Video 10', url: 'https://www.youtube.com/watch?v=v1arwXMvv1o&ab_channel=VjSiddhuVlogs',image:'#' },
    { id: 11, title: 'Video 11', url: 'https://www.youtube.com/watch?v=oDeomjlXa94',image:'#' },
    { id: 12, title: 'Video 12', url: 'https://www.youtube.com/watch?v=7HAS8or4__4',image:'#' },
  ];

  return (
    <div>
      <div className="related_video_div">
        <h3 className="logo_color e_vid_des_title">Related Videos</h3>
        <div className="scroll_btn">
          <button className="fa-solid fa-chevron-left e_scroll_btn" onClick={() => handleScroll('left')} />
          <button className="fa-solid fa-chevron-right e_scroll_btn" onClick={() => handleScroll('right')} />
        </div>
      </div>

      <div className="scroll_div" ref={scrollContainerRef}>
        {dummyVideos && dummyVideos.length > 0 ? (
          dummyVideos.map((dummyVideo) => (
            <div key={dummyVideo.id} className="box">
              <a href={dummyVideo.url} />
            </div>
          ))
        ) : (
         <p>No Content Available</p>
        )}
      </div>
    </div>
  );
};
