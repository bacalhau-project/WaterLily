import { FC, ReactElement } from 'react';
import { Typography } from '@mui/material';
import { appSubtitle } from '@/definitions/strings';

const subtitleStyle = {
  background:
    '-webkit-linear-gradient(right, #b583ff 10%, #f53ebb, #b583ff 70%)',
  fontSize: '4rem',
  fontWeight: 'bold',
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
};

type SubtitleProps = {
  text?: string;
};

export const Subtitle: FC<SubtitleProps> = ({ text }): ReactElement => {
  return (
    <Typography variant="h4" sx={subtitleStyle}>
      {text || appSubtitle}
    </Typography>
  );
};
