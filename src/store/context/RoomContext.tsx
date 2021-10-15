import { createContext } from 'react';
import { RoomContextState } from 'types/context';

const defaultValue: RoomContextState = {
  setRoom: () => null,
  logout: () => null,
  changeDevice: () => null,
  devices: {
    cameras: [],
    microphones: [],
    outputs: [],
  },
};

const RoomContext = createContext<RoomContextState>(defaultValue);

export default RoomContext;
