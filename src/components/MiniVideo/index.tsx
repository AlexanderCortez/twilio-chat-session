import Video from 'components/Video';
import { useParticipant } from 'hooks/useParticipant';
import { useContext } from 'react';
import { RoomContext } from 'store';
import { Wrapper } from './styles';

const MiniVideo = () => {
  const { room, videoRef, audioRef } = useContext(RoomContext);

  useParticipant({
    participant: room?.localParticipant,
    videoRef,
    audioRef,
  });

  return (
    <Wrapper>
      <Video bordered autoPlay videoRef={videoRef} />
      <audio ref={audioRef} autoPlay />
    </Wrapper>
  );
};

export default MiniVideo;
