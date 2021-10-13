import VideoCall from 'components/VideoCall';
import Footer from 'components/Room/Footer';
import { Wrapper } from './styles';

const Room = () => {
  return (
    <Wrapper>
      <VideoCall />
      <Footer />
    </Wrapper>
  );
};

export default Room;
