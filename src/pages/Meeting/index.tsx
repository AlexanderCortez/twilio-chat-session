import Header from 'components/Header';
import { Wrapper } from './styles';
import Room from 'components/Room';
import Lobby from 'components/Lobby';
import { useContext } from 'react';
import { RoomContext } from 'store';

const Meeting = () => {
  const { room } = useContext(RoomContext);
  return (
    <Wrapper>
      <Header />
      {room ? <Room /> : <Lobby />}
    </Wrapper>
  );
};

export default Meeting;
