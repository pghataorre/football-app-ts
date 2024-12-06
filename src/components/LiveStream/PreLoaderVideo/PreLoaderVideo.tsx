type TPreLoaderVideoParams = {
  imagePath: string | undefined;
  showTimerFlag: boolean;
  videoPreloadUrl: string | undefined;
}

const PreLoaderVideo = ({imagePath, showTimerFlag, videoPreloadUrl}: TPreLoaderVideoParams) => {
  const videoPath = showTimerFlag ? videoPreloadUrl : imagePath;
  return (
    <>
      <video loop autoPlay controls muted id="vid" poster={imagePath}>
        <source src={videoPath} type="video/mp4" />
        <p>Your browser does not support the video tag.</p>
      </video>
  </>
);
}

export default PreLoaderVideo;