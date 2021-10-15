import { useEffect, useState } from 'react';
import Video, {
  LocalAudioTrack,
  LocalTrack,
  LocalVideoTrack,
} from 'twilio-video';
import { trackpubsToTracks } from 'utils/twilio';

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

  useEffect(() => {
    if (participant) {
      setVideoTracks(
        trackpubsToTracks<LocalVideoTrack>(participant.videoTracks.values()),
      );

      setAudioTracks(
        trackpubsToTracks<LocalAudioTrack>(participant.audioTracks.values()),
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
            videoTracks.filter((v) => v.name !== track.name),
          );
        } else if (track.kind === 'audio') {
          setAudioTracks((audioTracks) =>
            audioTracks.filter((a) => a.name !== track.name),
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
