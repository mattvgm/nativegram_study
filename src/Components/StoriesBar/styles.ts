import styled, {css} from 'styled-components/native';

interface IStoryStatusType {
  type: 'none' | 'regular' | 'close' | 'seen';
}

export const StoriesContainer = styled.ScrollView`
  background: #fff;
  height: 120px;
  border-bottom-width: 1px;
  border-color: #8f8f8f;
`;
export const YourStoryContainer = styled.View`
  position: absolute;
  background-color: #008ef5;
  border-radius: 50px;
  right: 10px;
  bottom: 20px;
  color: #fff;
`;

export const StoryLabel = styled.Text<IStoryStatusType>`
  margin-top: 5px;
  font-size: 12px;
  color: #000;

  ${(props) =>
    props.type === 'none' &&
    css`
      color: #000;
    `}

  ${(props) =>
    props.type === 'regular' &&
    css`
      color: #000;
    `}

  ${(props) =>
    props.type === 'seen' &&
    css`
      color: #969696;
    `}
    
    ${(props) =>
      props.type === 'close' &&
      css`
        color: #000;
      `}
`;

export const StoryItem = styled.View`
  border-color: #000;
  border-width: 0px;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  margin: 10px;
`;
