import styled from 'styled-components/native';

export const Container = styled.View``;

export const StoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #fff;
  height: 120px;
  text-align: auto;
  border-bottom-width: 1px;
`;

export const StoryLabel = styled.Text`
  margin-top: 5px;
  font-size: 12px;
`;

export const StoryItem = styled.View`
  border-color: #000;
  border-width: 0px;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  margin: 5px;
`;
export const TopBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 48px;
  border-bottom-color: #000;
  border-bottom-width: 1px;
`;
export const FeedContainer = styled.ScrollView``;
