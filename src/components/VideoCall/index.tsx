import MiniVideo from 'components/MiniVideo';
import Video from 'components/Video';
import { Wrapper } from './styles';

const VideoCall = () => {
  return (
    <Wrapper>
      <Video autoPlay />
      <MiniVideo />
    </Wrapper>
  );
};

export default VideoCall;
