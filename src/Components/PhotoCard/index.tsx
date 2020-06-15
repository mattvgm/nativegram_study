import React, {useCallback, useMemo, useState} from 'react';
import {View, TouchableOpacity, NativeScrollEvent, Text} from 'react-native';

import {
  Picture,
  BottomBar,
  BottomButtons,
  Container,
  ContentCount,
} from './styles';
import ToggleButton from '../ToggleButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {rgba} from 'polished';

interface PhotoCardProps {
  postContent: any[];
}

const PhotoCard: React.FC<PhotoCardProps> = ({postContent}: PhotoCardProps) => {
  const [contentIndex, setContentIndex] = useState(1);
  const GetContentIndex = useCallback(
    (ScrollViewEvent) => {
      const index =
        Math.trunc(ScrollViewEvent.nativeEvent.contentOffset.x / 390) + 1;
      setContentIndex(index);
    },
    [contentIndex],
  );

  return (
    <>
      <Container>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{
            width: `${100 * postContent.length}%`,
          }}
          pagingEnabled>
          {postContent.map((eachPost, postIndex) => {
            return (
              <View key={postIndex}>
                <Picture source={eachPost} style={{resizeMode: 'stretch'}} />
                {postContent.length > 1 && (
                  <ContentCount style={{}}>
                    <Text style={{color: '#fff'}}>{`${postIndex + 1}\\${
                      postContent.length
                    }`}</Text>
                  </ContentCount>
                )}
              </View>
            );
          })}
        </ScrollView>
      </Container>
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
    </>
  );
};

export default PhotoCard;
