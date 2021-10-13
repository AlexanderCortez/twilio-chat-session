import Video from 'components/Video';
import { useParticipant } from 'hooks/useParticipant';
import { useContext, useRef } from 'react';
import { RoomContext } from 'store';
import { Wrapper } from './styles';

const MiniVideo = () => {
  const { room } = useContext(RoomContext);
  const videoRef = useRef();

  useParticipant({
    participant: room?.localParticipant,
    videoRef,
  });

  return (
    <Wrapper>
      <Video
        videoKey={room?.localParticipant?.sid}
        bordered
        autoPlay
        videoRef={videoRef}
      />
    </Wrapper>
  );
};

export default MiniVideo;
