import React, { useContext, useState } from 'react';
import Button from 'components/Button';
import Input from 'components/Input';
import { Wrapper } from './styles';
import { RoomContext } from 'store';

const Lobby = () => {
  const [username, setUsername] = useState<string>('');
  const { setRoom } = useContext(RoomContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setRoom(username);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          required
          autoComplete="off"
          name="username"
          placeholder="Your name"
          isHeading
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <Button isPrimary type="submit">
          Join meeting
        </Button>
      </form>
    </Wrapper>
  );
};

export default Lobby;
