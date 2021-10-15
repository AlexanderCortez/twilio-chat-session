import Video from 'twilio-video';

export type RoomContextState = {
  room?: Video.Room;
  participants?: Video.RemoteParticipant[];
  setRoom: (username: string) => void;
  logout: () => void;
  changeDevice: (device: MediaDeviceInfo) => void;
  videoRef?: any;
  audioRef?: any;
  devices: {
    microphones: MediaDeviceInfo[];
    outputs: MediaDeviceInfo[];
    cameras: MediaDeviceInfo[];
  };
};
