import { useEffect, useState } from 'react';
import Video, {
  LocalAudioTrack,
  LocalAudioTrackPublication,
  LocalTrack,
  LocalVideoTrack,
  LocalVideoTrackPublication,
  RemoteTrackPublication,
  RemoteVideoTrackPublication,
} from 'twilio-video';

type Props = {
  participant?: Video.Room['localParticipant'] | Video.RemoteParticipant;
  videoRef?: any;
  audioRef?: any;
};

export const useParticipant = ({ participant, videoRef, audioRef }: Props) => {
  const [videoTracks, setVideoTracks] = useState<LocalVideoTrack[]>([]);
  const [audioTracks, setAudioTracks] = useState<LocalAudioTrack[]>([]);

  useEffect(() => {
    const videoTrack = videoTracks[0];
    if (videoTrack && videoRef) {
      videoTrack.attach(videoRef.current);
      return () => {
        videoTrack.detach();
      };
    }
  }, [videoTracks, videoRef]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack && audioRef) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks, audioRef]);

  const trackpubsToTracks = (
    values: IterableIterator<
      | LocalAudioTrackPublication
      | LocalVideoTrackPublication
      | RemoteTrackPublication
      | RemoteVideoTrackPublication
    >,
  ) =>
    Array.from(values)
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    if (participant) {
      setVideoTracks(
        trackpubsToTracks(
          participant.videoTracks.values(),
        ) as LocalVideoTrack[],
      );

      setAudioTracks(
        trackpubsToTracks(
          participant.audioTracks.values(),
        ) as LocalAudioTrack[],
      );

      const trackSubscribed = (track: LocalTrack) => {
        if (track.kind === 'video') {
          setVideoTracks((videoTracks) => [...videoTracks, track]);
        } else if (track.kind === 'audio') {
          setAudioTracks((audioTracks) => [...audioTracks, track]);
        }
      };

      const trackUnsubscribed = (track: LocalTrack) => {
        if (track.kind === 'video') {
          setVideoTracks((videoTracks) =>
            videoTracks.filter((v) => v !== track),
          );
        } else if (track.kind === 'audio') {
          setAudioTracks((audioTracks) =>
            audioTracks.filter((a) => a !== track),
          );
        }
      };

      participant.on('trackSubscribed', trackSubscribed);
      participant.on('trackUnsubscribed', trackUnsubscribed);

      return () => {
        setVideoTracks([]);
        setAudioTracks([]);
        participant.removeAllListeners();
      };
    }
  }, [participant]);

  return {
    videoTracks,
    audioTracks,
  };
};
