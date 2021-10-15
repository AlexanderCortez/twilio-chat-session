import Button from 'components/Button';
import Icon from 'components/Icon';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { useContext, useRef, useState } from 'react';
import { RoomContext } from 'store';
import { Wrapper, Trigger, OptionsWrapper } from './styles';

type Props = { type: 'audio' | 'input' | 'video' };

const Devices = ({ type }: Props) => {
  const { changeDevice } = useContext(RoomContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<any>();

  useOnClickOutside(wrapperRef, () => {
    setIsOpen(false);
  });

  const { devices } = useContext(RoomContext);
  const getDevices = () => {
    if (type === 'audio') {
      return devices.outputs;
    }
    if (type === 'input') {
      return devices.microphones;
    }
    return devices.cameras;
  };

  const onClick = (device: MediaDeviceInfo) => {
    setIsOpen(false);
    changeDevice(device);
  };

  return (
    <Wrapper ref={wrapperRef}>
      {isOpen && (
        <OptionsWrapper>
          {getDevices().map((device) => (
            <Button onClick={() => onClick(device)} key={device.deviceId}>
              {device.label}
            </Button>
          ))}
        </OptionsWrapper>
      )}
      <Trigger isPrimary onClick={() => setIsOpen(!isOpen)}>
        <Icon name={`ri-arrow-${isOpen ? 'down' : 'up'}-s-line`} size={18} />
      </Trigger>
    </Wrapper>
  );
};

export default Devices;
