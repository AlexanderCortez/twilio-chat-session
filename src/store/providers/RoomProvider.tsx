import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Video, {
  createLocalAudioTrack,
  createLocalTracks,
  createLocalVideoTrack,
  LocalTrack,
  LocalVideoTrack,
} from 'twilio-video';
import { RoomContext } from 'store';
import { createVideoToken } from 'store/actions';
import { trackpubsToTracks } from 'utils/twilio';

const RoomProvider: FC = ({ children }) => {
  // TODO: Implement dynamic room name
  const roomName = 'test-video-chat';
  const videoRef = useRef<HTMLAudioElement>();
  const audioRef = useRef<HTMLAudioElement>();

  const [participants, setParticipants] = useState<Video.RemoteParticipant[]>(
    [],
  );
  const [room, setRoom] = useState<Video.Room | undefined>();
  const [outputDevices, setOutputDevices] = useState<MediaDeviceInfo[]>([]);
  const [inputDevices, setInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [cameraDevices, setCameraDevices] = useState<MediaDeviceInfo[]>([]);

  const setDeviceOutput = async () => {
    const devices = await navigator?.mediaDevices?.enumerateDevices();
    if (devices) {
      const microphones = devices?.filter(
        (device) => device.kind === 'audioinput',
      );
      const outputs = devices?.filter(
        (device) => device.kind === 'audiooutput',
      );
      const cameras = devices?.filter((device) => device.kind === 'videoinput');
      setOutputDevices(outputs);
      setInputDevices(microphones);
      setCameraDevices(cameras);
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

  const setRoomEvents = useCallback((currentRoom: Video.Room) => {
    currentRoom.on('participantConnected', participantConnected);
    currentRoom.on('participantDisconnected', participantDisconnected);
    currentRoom.participants.forEach(participantConnected);
  }, []);

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
    const [camera] = cameraDevices;
    const [mic] = inputDevices;
    let tracks: Video.LocalTrack[] | undefined;
    if (camera && mic) {
      tracks = await createLocalTracks({
        audio: { deviceId: mic.deviceId },
        video: { deviceId: camera.deviceId },
      });
    }
    const currentRoom = await Video.connect(videoToken, {
      name: roomName,
      tracks,
    });
    setRoomEvents(currentRoom);
    setRoom(currentRoom);
  };

  const changeDevice = async (device: MediaDeviceInfo) => {
    if (['audioinput', 'videoinput'].includes(device.kind) && room) {
      const tracks = trackpubsToTracks<LocalVideoTrack>(
        room.localParticipant[
          device?.kind === 'videoinput' ? 'videoTracks' : 'audioTracks'
        ].values(),
      );
      tracks.forEach((track) => {
        if (track) {
          track.disable();
          track.stop();
          track.detach(
            (device?.kind === 'videoinput' ? videoRef : audioRef)?.current,
          );
        }
      });
      room.localParticipant.unpublishTracks(tracks);
      if (device.kind === 'videoinput') {
        const localVideoTrack = await createLocalVideoTrack({
          deviceId: device.deviceId,
        });
        room?.localParticipant.publishTrack(localVideoTrack);
        localVideoTrack.attach(videoRef.current);
      } else {
        const localAudioTrack = await createLocalAudioTrack({
          deviceId: device.deviceId,
        });
        room?.localParticipant.publishTrack(localAudioTrack);
        localAudioTrack.attach(videoRef.current);
      }
    }
  };

  return (
    <RoomContext.Provider
      value={{
        room,
        changeDevice,
        setRoom: onSetRoom,
        logout: handleLogout,
        participants,
        devices: {
          outputs: outputDevices,
          microphones: inputDevices,
          cameras: cameraDevices,
        },
        videoRef,
        audioRef,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
