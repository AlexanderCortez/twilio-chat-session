import { FC, useCallback, useEffect, useState } from 'react';
import Video, { LocalTrack } from 'twilio-video';
import { RoomContext } from 'store';
import { createVideoToken } from 'store/actions';

const RoomProvider: FC = ({ children }) => {
  // TODO: Implement dynamic room name
  const roomName = 'test-video-chat';

  const [participants, setParticipants] = useState<Video.RemoteParticipant[]>(
    [],
  );
  const [room, setRoom] = useState<Video.Room | undefined>();
  const [outputDevice, setOutputDevice] = useState<MediaDeviceInfo>();

  const setDeviceOutput = async () => {
    const devices = await navigator?.mediaDevices?.enumerateDevices();
    const audioOutputDevice = devices?.find(
      (device) => device.kind === 'audiooutput',
    );
    if (audioOutputDevice) {
      setOutputDevice(audioOutputDevice);
    }
  };

  const participantConnected = (participant: Video.RemoteParticipant) => {
    setParticipants(() => [participant]);
  };

  const participantDisconnected = (participant: Video.RemoteParticipant) => {
    setParticipants((prevParticipants) =>
      prevParticipants.filter((p) => p.sid !== participant.sid),
    );
  };

  const setRoomEvents = useCallback(
    (currentRoom: Video.Room) => {
      currentRoom.on('trackSubscribed', async (track) => {
        if (track.kind === 'audio' && outputDevice) {
          const audioElement = track.attach();
          await (audioElement as any).setSinkId(outputDevice?.deviceId);
          document.body.appendChild(audioElement);
        }
      });

      currentRoom.on('participantConnected', participantConnected);
      currentRoom.on('participantDisconnected', participantDisconnected);
      currentRoom.participants.forEach(participantConnected);
    },
    [outputDevice],
  );

  useEffect(() => {
    if (room) {
      return () => {
        room.off('participantConnected', participantConnected);
        room.off('participantDisconnected', participantDisconnected);
      };
    }
  }, [setRoomEvents, room]);

  useEffect(() => {
    setDeviceOutput();
  }, []);

  const handleLogout = () => {
    setRoom((prevRoom) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub) => {
          (trackPub.track as LocalTrack & { stop: () => void })?.stop();
        });
        prevRoom.disconnect();
      }
      return undefined;
    });
  };

  const onSetRoom = async (username: string) => {
    const videoToken = await createVideoToken(username, roomName);
    const currentRoom = await Video.connect(videoToken, { name: roomName });
    setRoomEvents(currentRoom);
    setRoom(currentRoom);
  };

  return (
    <RoomContext.Provider
      value={{
        room,
        setRoom: onSetRoom,
        logout: handleLogout,
        participants,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
