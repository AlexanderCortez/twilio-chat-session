import React from 'react';

export interface VideoProps extends Omit<React.ComponentProps<'video'>, 'ref'> {
  videoRef?:
    | ((instance: HTMLVideoElement | null) => void)
    | React.RefObject<HTMLVideoElement>
    | null
    | undefined;
  bordered?: boolean;
  label?: string;
}
