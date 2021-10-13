import MiniVideo from 'components/MiniVideo';
import Nobody from 'components/Nobody';
import Video from 'components/Video';
import { useParticipant } from 'hooks/useParticipant';
import { useContext, useRef } from 'react';
import { RoomContext } from 'store';
import { Wrapper } from './styles';

const VideoCall = () => {
  const { participants } = useContext(RoomContext);
  const remoteParticipant = [...(participants || [])].pop();
  const videoRef = useRef();
  useParticipant({ participant: remoteParticipant, videoRef });

  return (
    <Wrapper>
      {remoteParticipant ? (
        <Video
          autoPlay
          videoRef={videoRef}
          videoKey={remoteParticipant.sid}
          label={remoteParticipant?.identity}
        />
      ) : (
        <Nobody />
      )}
      <MiniVideo />
    </Wrapper>
  );
};

export default VideoCall;
