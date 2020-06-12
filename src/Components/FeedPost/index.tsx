import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {
  Container,
  HeaderPost,
  PhotoCard,
  BottomBar,
  Picture,
  CommentsBox,
  CommentsItem,
  FeedPostHeader,
  PostOwnerName,
  BottomButtons,
  CommentsResponseItem,
  CommentsMessageItem,
  Message,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import avatarImg from '../../assets/eagle.png';
import dummyUser1 from '../../assets/dummyUser1.png';
import dummyUser2 from '../../assets/dummyUser2.png';
import dummyUser3 from '../../assets/dummyUser3.png';
import dummyUser4 from '../../assets/dummyUser4.png';
import dummyUser5 from '../../assets/dummyUser5.png';
import dummyUser6 from '../../assets/dummyUser6.png';
import AvatarStoryPhoto from '../../Components/AvatarStoryPhoto/';
import ToggleButton from '../ToggleButton';

interface IPostComment {
  author: string;
  message: string;
  isLiked: boolean;
  response?: string;
}

export interface IFeedPost {
  username: string;
  location?: string;
  profile_pic: any;
  postContent: any[];
  title: string;
  likes: string[];
  comments: IPostComment[];
  date: number;
}

const FeedPost: React.FC<IFeedPost> = (PostData: IFeedPost) => {
  return (
    <Container>
      <HeaderPost>
        <FeedPostHeader>
          <AvatarStoryPhoto
            type="regular"
            image={PostData.profile_pic}
            size={28}
          />
          <PostOwnerName>
            <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>
              {PostData.username}
            </Text>
            {!!PostData.location && (
              <>
                <Text style={{marginLeft: 10, color: '#969696', fontSize: 14}}>
                  {PostData.location}
                </Text>
              </>
            )}
          </PostOwnerName>
        </FeedPostHeader>
        <TouchableOpacity>
          <FeatherIcon name="more-vertical" size={24} />
        </TouchableOpacity>
      </HeaderPost>
      <PhotoCard>
        <Picture
          source={PostData.postContent[0]}
          style={{resizeMode: 'stretch'}}
        />
      </PhotoCard>
      <BottomBar>
        <BottomButtons>
          <ToggleButton
            size={32}
            icon={{icon: 'heart-outline', color: '#000'}}
            iconToggled={{icon: 'heart', color: '#DA2E33'}}
          />
          <TouchableOpacity>
            <Icon name="message-outline" size={32} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcon name="send" size={30} />
          </TouchableOpacity>
        </BottomButtons>

        <TouchableOpacity>
          <ToggleButton
            size={32}
            icon={{icon: 'bookmark-outline', color: '#000'}}
            iconToggled={{icon: 'bookmark', color: '#000'}}
          />
        </TouchableOpacity>
      </BottomBar>
      <CommentsBox>
        {/* Header */}
        {PostData.likes.length >= 1 && (
          <CommentsItem>
            <Text>Curtido por </Text>
            <Text style={{fontWeight: 'bold'}}>{PostData.likes[0]}</Text>
            {PostData.likes.length >= 2 && (
              <>
                <Text> e </Text>
                <Text style={{fontWeight: 'bold'}}>outras pessoas </Text>
              </>
            )}
          </CommentsItem>
        )}

        {/* Titulo */}
        <CommentsItem>
          <Text style={{fontWeight: 'bold'}}>{PostData.username} : </Text>
          <Text>{PostData.title} </Text>
        </CommentsItem>
        {/* CommentsExpansion */}
        {PostData.comments.length >= 2 && (
          <CommentsItem>
            <Text style={{color: '#969696'}}>
              ver todos os {PostData.comments.length - 1} comentários
            </Text>
          </CommentsItem>
        )}
        {/* Comments */}
        {PostData.comments.length >= 1 && (
          <CommentsMessageItem>
            <Message>
              <Text style={{fontWeight: 'bold'}}>
                {PostData.comments[PostData.comments.length - 1].author + ' : '}
              </Text>
              <Text>
                {PostData.comments[PostData.comments.length - 1].message}
              </Text>
            </Message>
            <ToggleButton
              size={16}
              icon={{icon: 'heart-outline', color: '#000'}}
              iconToggled={{icon: 'heart', color: '#DA2E33'}}
            />
          </CommentsMessageItem>
        )}
        {PostData.comments[PostData.comments.length - 1].response && (
          <CommentsResponseItem>
            <Text style={{fontWeight: 'bold'}}>{PostData.username} : </Text>
            <Text>
              {PostData.comments[PostData.comments.length - 1].response}{' '}
            </Text>
          </CommentsResponseItem>
        )}

        <CommentsItem>
          <Text style={{color: '#969696'}}>há {PostData.date} minutos - </Text>
          <Text>Ver tradução</Text>
        </CommentsItem>
      </CommentsBox>
    </Container>
  );
};

export default FeedPost;
