import "../styles/video.css";

const Video = () => {
  return (
    <div className="vid-main">
      <video className="video-bg" playsInline loop autoPlay muted>
        <source src="stillCircle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
