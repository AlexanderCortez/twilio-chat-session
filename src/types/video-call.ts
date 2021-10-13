import React from 'react';

export interface VideoProps extends Omit<React.ComponentProps<'video'>, 'ref'> {
  videoRef?: any;
  bordered?: boolean;
  label?: string;
  videoKey?: React.Key;
}
