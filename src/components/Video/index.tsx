import { VideoProps } from 'types';
import { Wrapper, Label } from './styles';

const Video = ({
  videoRef,
  bordered,
  label,
  videoKey,
  ...rest
}: VideoProps) => {
  return (
    <Wrapper bordered={bordered}>
      {label && <Label>{label}</Label>}
      <video {...rest} ref={videoRef} key={videoKey} />
    </Wrapper>
  );
};

export default Video;
