import React from 'react';
import {} from 'react-native';

import {StoryImage} from './styles';

interface IAvatarStoryPhotoProps {
  image: any;
  size: number;
}

const AvatarStoryPhoto: React.FC<IAvatarStoryPhotoProps> = ({image, size}) => {
  return <StoryImage source={image} style={{width: size, height: size}} />;
};

export default AvatarStoryPhoto;
