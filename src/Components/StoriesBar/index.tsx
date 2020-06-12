import React from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {
  StoriesContainer,
  StoryItem,
  StoryLabel,
  YourStoryContainer,
} from './styles';
import AvatarStoryPhoto from '../AvatarStoryPhoto';

import dummyUser1 from '../../assets/dummyUser1.png';
import dummyUser2 from '../../assets/dummyUser2.png';
import dummyUser3 from '../../assets/dummyUser3.png';
import dummyUser4 from '../../assets/dummyUser4.png';
import dummyUser5 from '../../assets/dummyUser5.png';
import dummyUser6 from '../../assets/dummyUser6.png';
import Icon from 'react-native-vector-icons/Feather';

interface IStoryItem {
  name: string;
  profilePic: any;
  type: 'none' | 'regular' | 'close' | 'seen';
}

const fakeStoriesList: IStoryItem[] = [
  {
    name: 'aliceane_',
    profilePic: dummyUser3,
    type: 'seen',
  },
  {
    name: 'markstra...',
    profilePic: dummyUser1,
    type: 'close',
  },
  {
    name: 'marieanne',
    profilePic: dummyUser4,
    type: 'regular',
  },
  {
    name: 'claradoe',
    profilePic: dummyUser5,
    type: 'regular',
  },
  {
    name: 'patriciad...',
    profilePic: dummyUser6,
    type: 'regular',
  },
];

const StoriesBar: React.FC = () => {
  return (
    <StoriesContainer
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <StoryItem>
        <TouchableOpacity>
          <AvatarStoryPhoto image={dummyUser2} size={64} type={'regular'} />
          <StoryLabel type={'regular'}>Your Story</StoryLabel>
          <YourStoryContainer>
            <Icon name="plus-circle" size={18} color={'#fff'} />
          </YourStoryContainer>
        </TouchableOpacity>
      </StoryItem>

      {fakeStoriesList.map((eachStory) => {
        return (
          <StoryItem key={eachStory.name}>
            <TouchableOpacity>
              <AvatarStoryPhoto
                image={eachStory.profilePic}
                size={64}
                type={eachStory.type}
              />
              <StoryLabel type={eachStory.type}>{eachStory.name}</StoryLabel>
            </TouchableOpacity>
          </StoryItem>
        );
      })}
    </StoriesContainer>
  );
};

export default StoriesBar;
