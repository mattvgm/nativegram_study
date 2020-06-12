/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Container, TopBar, FeedContainer} from './styles';
import StoriesBar from '../../Components/StoriesBar/';

import avatarImg from '../../assets/avatar.png';
import eagle from '../../assets/eagle.png';
import dummyUser1 from '../../assets/dummyUser1.png';
import dummyUser2 from '../../assets/dummyUser2.png';
import dummyUser3 from '../../assets/dummyUser3.png';
import dummyUser4 from '../../assets/dummyUser4.png';
import dummyUser5 from '../../assets/dummyUser5.png';
import dummyUser6 from '../../assets/dummyUser6.png';
import hi from '../../assets/hi.png';
import FeedPost, {IFeedPost} from '../../Components/FeedPost/';
import AvatarStoryPhoto from '../../Components/AvatarStoryPhoto/';
import logo from '../../assets/logo.png';

//Fake Posts
const fakePosts: IFeedPost[] = [
  {
    username: 'johndoejohn',
    location: 'São Paulo',
    title: 'Mais um ensaio bem feito 🎸',
    profile_pic: dummyUser2,
    date: 16,
    likes: ['peter', 'paul', 'anne'],
    postContent: [dummyUser2],
    comments: [
      {author: 'peter', message: 'Mandou bem! ', isLiked: false},
      {author: 'paul', message: 'Me ensina ', isLiked: false},
      {
        author: 'anne',
        message: 'Ficou excelente 👏',
        isLiked: false,
        response: 'muito obrigado',
      },
    ],
  },
  {
    username: 'aliceaneclark',
    location: '',
    title: 'The World is mine',
    profile_pic: dummyUser3,
    date: 16,
    likes: ['peter'],
    postContent: [dummyUser3],
    comments: [
      {
        author: 'johndoe',
        message: 'This place is amazing 👏',
        isLiked: false,
        response: 'ty 🙂',
      },
    ],
  },
  {
    username: 'patriciadoe',
    location: '',
    title: 'Just saw this incridible bird',
    profile_pic: dummyUser6,
    date: 18,
    likes: ['peter'],
    postContent: [eagle],
    comments: [
      {
        author: 'johndoe',
        message: 'Nice pic 👏',
        isLiked: false,
        response: 'ty 🙂!',
      },
    ],
  },
  {
    username: 'busycore',
    location: 'São Paulo',
    title: 'This is my study',
    profile_pic: hi,
    date: 17,
    likes: ['peter'],
    postContent: [hi],
    comments: [
      {
        author: 'patriciadoe',
        message: 'Looking great 👏',
        isLiked: false,
        response: 'Thanks!',
      },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <TopBar
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}>
        <TouchableOpacity>
          <Icon name="camera" size={32} style={{marginLeft: 10}} />
        </TouchableOpacity>
        <Image source={logo} />
        <Text style={{fontStyle: 'italic'}}>Study by Matheus Vargem</Text>
        <TouchableOpacity>
          <Icon name="send" size={32} style={{marginRight: 10}} />
        </TouchableOpacity>
      </TopBar>

      <FeedContainer>
        <StoriesBar />
        {fakePosts.map((eachPost) => {
          return (
            <FeedPost
              key={eachPost.username + eachPost.date}
              username={eachPost.username}
              location={eachPost.location}
              title={eachPost.title}
              profile_pic={eachPost.profile_pic}
              date={eachPost.date}
              likes={eachPost.likes}
              postContent={eachPost.postContent}
              comments={eachPost.comments}
            />
          );
        })}
      </FeedContainer>
    </Container>
  );
};
export default Home;
