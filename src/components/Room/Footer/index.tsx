import Button from 'components/Button';
import Icon from 'components/Icon';
import { useContext } from 'react';
import { RoomContext } from 'store';
import Devices from 'components/Room/Devices';
import { Wrapper, ItemWrapper } from './styles';

const Footer = () => {
  const { logout } = useContext(RoomContext);
  return (
    <Wrapper>
      <ItemWrapper>
        <Button>
          <Icon name="ri-camera-line" size={24} />
        </Button>
        <Devices type="video" />
        <p>Cam</p>
      </ItemWrapper>
      <ItemWrapper>
        <Button>
          <Icon name="ri-mic-line" size={24} />
        </Button>
        <Devices type="input" />
        <p>Mic</p>
      </ItemWrapper>
      <ItemWrapper>
        <Button onClick={logout}>
          <Icon name="ri-checkbox-blank-line" size={24} isDanger />
        </Button>
        <p>Leave</p>
      </ItemWrapper>
    </Wrapper>
  );
};

export default Footer;
