import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {
  Container,
  HeaderPost,
  PhotoCard,
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
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <AvatarStoryPhoto image={dummyUser4} size={28} />
          <View style={{alignItems: 'center'}}>
            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
              vulgomatt
            </Text>
            <Text style={{fontSize: 14}}>São Paulo</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Icon name="more-vertical" size={32} />
        </TouchableOpacity>
      </HeaderPost>
      <PhotoCard>
        <Picture source={avatarImg} style={{resizeMode: 'stretch'}} />
      </PhotoCard>
      <BottomBar>
        <View
          style={{
            marginLeft: 5,
            flexDirection: 'row',
            width: 130,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Icon name="heart" size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="message-circle" size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="send" size={32} />
          </TouchableOpacity>
        </View>
        <View>
          <Text />
        </View>
        <TouchableOpacity>
          <Icon name="bookmark" size={32} />
        </TouchableOpacity>
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
        <CommentsItem
          style={{justifyContent: 'space-between', marginRight: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold'}}>zuck : </Text>
            <Text>Muito bom hein! </Text>
          </View>
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
          <Text style={{fontStyle: 'italic'}}>há 16 minutos - </Text>
          <Text style={{fontWeight: 'bold'}}>Ver tradução</Text>
        </CommentsItem>
      </CommentsBox>
    </Container>
  );
};

export default FeedPost;
