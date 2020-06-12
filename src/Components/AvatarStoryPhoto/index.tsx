import React from 'react';

import {StoryImage, Container} from './styles';

interface IAvatarStoryPhotoProps {
  image: any;
  size: number;

  type: 'none' | 'regular' | 'close' | 'seen';
}

const AvatarStoryPhoto: React.FC<IAvatarStoryPhotoProps> = ({
  image,
  size,
  type,
  children,
}) => {
  return (
    <Container type={type}>
      <StoryImage
        type={type}
        source={image}
        style={{width: size, height: size}}
      />
      {children}
    </Container>
  );
};

export default AvatarStoryPhoto;
