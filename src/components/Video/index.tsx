import { VideoProps } from 'types';
import { Wrapper, Label } from './styles';

const Video = ({ videoRef, bordered, label, ...rest }: VideoProps) => {
  return (
    <Wrapper bordered={bordered}>
      {label && <Label>{label}</Label>}
      <video {...rest} ref={videoRef}>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.w3schools.com/html/mov_bbb.ogg"
          type="video/ogg"
        />
        Your browser does not support HTML video.
      </video>
    </Wrapper>
  );
};

export default Video;
