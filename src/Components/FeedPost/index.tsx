import React from 'react';
import {View, Text, Image} from 'react-native';

import {
  Container,
  HeaderPost,
  PictureContainer,
  BottomBar,
  Picture,
  CommentsBox,
  CommentsItem,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import avatarImg from '../../assets/eagle.png';
import dummyUser1 from '../../assets/dummyUser1.png';
import dummyUser2 from '../../assets/dummyUser2.png';
import dummyUser3 from '../../assets/dummyUser3.png';
import dummyUser4 from '../../assets/dummyUser4.png';
import dummyUser5 from '../../assets/dummyUser5.png';
import dummyUser6 from '../../assets/dummyUser6.png';
import AvatarStoryPhoto from '../../Components/AvatarStoryPhoto/';

const FeedPost: React.FC = () => {
  return (
    <Container>
      <HeaderPost>
        <AvatarStoryPhoto image={dummyUser4} size={32} />
        <Text>vulgomatt</Text>
        <Icon name="more-vertical" size={32} />
      </HeaderPost>
      <PictureContainer>
        <Picture source={avatarImg} style={{resizeMode: 'stretch'}} />
      </PictureContainer>
      <BottomBar>
        <Icon name="heart" size={32} />
        <Icon name="message-circle" size={32} />
        <Icon name="send" size={32} />
        <Text>vulgomatt</Text>
        <Icon name="bookmark" size={32} />
      </BottomBar>
      <CommentsBox>
        <CommentsItem>
          <Text>Curtido por </Text>
          <Text style={{fontWeight: 'bold'}}>zuck </Text>
          <Text>e </Text>
          <Text style={{fontWeight: 'bold'}}>outras pessoas </Text>
        </CommentsItem>
        <CommentsItem>
          <Text style={{fontWeight: 'bold'}}>vulgomatt : </Text>
          <Text>Terminando o POC do nativegram </Text>
        </CommentsItem>
        <CommentsItem>
          <Text style={{fontStyle: 'italic'}}>
            ver todos os 160 comentários{' '}
          </Text>
        </CommentsItem>
        <CommentsItem>
          <Text style={{fontWeight: 'bold'}}>zuck : </Text>
          <Text>Muito bom hein! </Text>
          <Icon name="heart" />
        </CommentsItem>
        <CommentsItem
          style={{
            marginLeft: 10,
            padding: 5,
            borderLeftColor: '#000',
            borderLeftWidth: 2,
          }}>
          <Text style={{fontWeight: 'bold'}}>vulgomatt : </Text>
          <Text>valeu mestre </Text>
        </CommentsItem>
        <CommentsItem>
          <Text style={{fontStyle: 'italic'}}>
            há 16 minutos - Ver tradução
          </Text>
        </CommentsItem>
      </CommentsBox>
    </Container>
  );
};

export default FeedPost;
