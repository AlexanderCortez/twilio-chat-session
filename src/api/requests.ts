import axiosClient from 'api/axiosClient';
import { IApiResponse } from 'types';

export const getData = async <T>(
  endpoint: string,
  params?: unknown,
): Promise<IApiResponse<T>> => {
  const response = await axiosClient.get<IApiResponse<T>>(endpoint, {
    params,
  });
  return response.data;
};

export const postData = async <T>(
  endpoint: string,
  data: unknown,
): Promise<IApiResponse<T>> => {
  const response = await axiosClient.post<IApiResponse<T>>(endpoint, data);
  return response.data;
};

export const patchData = async <T>(
  endpoint: string,
  data?: unknown,
): Promise<IApiResponse<T>> => {
  const response = await axiosClient.patch<IApiResponse<T>>(endpoint, data);
  return response.data;
};

export const putData = async <T>(
  endpoint: string,
  data: unknown,
  params?: object,
): Promise<IApiResponse<T>> => {
  const response = await axiosClient.put<IApiResponse<T>>(endpoint, data, {
    params,
  });
  return response.data;
};

export const deleteData = async <T>(
  endpoint: string,
  data?: unknown,
): Promise<IApiResponse<T>> => {
  return axiosClient.delete(endpoint, { data });
};
