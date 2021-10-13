import { createContext } from 'react';
import { RoomContextState } from 'types/context';

const defaultValue: RoomContextState = {
  setRoom: () => null,
  logout: () => null,
};

const RoomContext = createContext<RoomContextState>(defaultValue);

export default RoomContext;
