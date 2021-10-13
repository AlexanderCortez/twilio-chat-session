import Video from 'twilio-video';

export type RoomContextState = {
  room?: Video.Room;
  participants?: Video.RemoteParticipant[];
  setRoom: (username: string) => void;
  logout: () => void;
};
