type TSounCloudProps = {
    trackId: string;
    iframeTitle: string;
  }

const SoundCloudWidget = ({trackId, iframeTitle}: TSounCloudProps) => {
  return (
    <div className="sound-cloud-container">
        <iframe 
            title={iframeTitle}
            width="100%"
            height="100"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${trackId}&auto_play=true&show_artwork=false`}>    
        </iframe>
    </div>
  );
}

export default SoundCloudWidget;
