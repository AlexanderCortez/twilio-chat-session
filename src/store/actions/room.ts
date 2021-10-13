import { postData } from 'api/requests';
import endpoints from 'appConstants/endpoints';
import { VideoToken } from 'types';

export const createVideoToken = async (username: string, roomName: string) => {
  const response = await postData<VideoToken>(endpoints.twilio.video.token, {
    identity: username,
    room: roomName,
  });
  return response.data.token;
};
