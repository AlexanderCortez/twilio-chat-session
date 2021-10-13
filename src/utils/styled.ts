export const transparentize = (hex: string, alpha: number): string =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`;
