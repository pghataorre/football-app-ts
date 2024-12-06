
import { StreamStateContext } from '../context/StreamProvider/streamStateContext';
import { useContext } from 'react';
import NoStreamDefault from '../components/LiveStream/NoStreamDefault/NoStreamDefault';
import LiveStreamDetails from '../components/LiveStream/LiveStreamDetails/LiveStreamDetails';

const LiveSession = (): JSX.Element => {
	const {liveStreamContent} = useContext(StreamStateContext);

	return (
        <>
            <h1>Live Mix Session</h1>
            <div className="live-session-container">
                {liveStreamContent?.scheduledStream ? (
                    <LiveStreamDetails />
                ): (
                    <NoStreamDefault />
                )}
            </div>
        </>
	);
};

export default LiveSession;
