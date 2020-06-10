import React from 'react';

import {StoryImage, Container} from './styles';

interface IAvatarStoryPhotoProps {
  image: any;
  size: number;
}

const AvatarStoryPhoto: React.FC<IAvatarStoryPhotoProps> = ({image, size}) => {
  return (
    <Container>
      <StoryImage source={image} style={{width: size, height: size}} />
    </Container>
  );
};

export default AvatarStoryPhoto;
