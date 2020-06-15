/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Container, TopBar, FeedContainer} from './styles';
import StoriesBar from '../../Components/StoriesBar/';
import FeedPost from '../../Components/FeedPost/';

import logo from '../../assets/logo.png';
import {fakePosts} from '../../config/';

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
