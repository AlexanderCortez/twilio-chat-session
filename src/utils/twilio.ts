import {
  LocalAudioTrack,
  LocalAudioTrackPublication,
  LocalVideoTrack,
  LocalVideoTrackPublication,
  RemoteTrack,
  RemoteTrackPublication,
  RemoteVideoTrackPublication,
} from 'twilio-video';

type ITrack = LocalAudioTrack | LocalVideoTrack | RemoteTrack | null;

export const trackpubsToTracks = <T extends ITrack>(
  values: IterableIterator<
    | LocalAudioTrackPublication
    | LocalVideoTrackPublication
    | RemoteTrackPublication
    | RemoteVideoTrackPublication
  >,
): T[] =>
  Array.from(values)
    .map((publication) => publication.track)
    .filter((track) => track !== null) as T[];
