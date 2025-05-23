import './PreLoaderVideo.scss';
import config from '../../../config/config.mjs';

type TPreLoaderVideoParams = {
  imagePath: string | undefined;
  showTimerFlag: boolean;
  videoPreloadUrl: string | undefined;
}

const PreLoaderVideo = ({imagePath, showTimerFlag, videoPreloadUrl}: TPreLoaderVideoParams) => {
  const videoPreloadUrlWithHttp = `https://${videoPreloadUrl}`;
  const videoPath = showTimerFlag ? videoPreloadUrlWithHttp : config.defaultVideo;

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
