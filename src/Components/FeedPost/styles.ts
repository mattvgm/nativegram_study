import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const FeedPostHeader = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const HeaderPost = styled.View`
  border: #000;
  border-width: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin-left: 10px;
  margin-right: 10px;
  padding-bottom: 3px;
`;
export const PhotoCard = styled.View`
  border: #000;
  border-width: 1px;
  margin-left: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 393px;
  width: 393px;
`;

export const Picture = styled.Image`
  flex: 1;
  height: 393px;
  width: 393px;
`;

export const BottomBar = styled.View`
  border: #000;
  border-width: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const CommentsBox = styled.View`
  border: #000;
  border-width: 0px;
  padding: 4px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const PostOwnerName = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const BottomButtons = styled.View`
  margin-left: 5px;
  flex-direction: row;
  width: 130px;
  justify-content: space-between;
`;

export const CommentsItem = styled.View`
  flex-direction: row;
  align-items: center;

  height: 19px;
`;

export const Message = styled.View`
  flex-direction: row;
`;

export const CommentsMessageItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  height: 19px;
`;

export const CommentsResponseItem = styled.View`
  flex-direction: row;
  align-items: center;

  height: 19px;
  margin-left: 10px;
  padding: 5px;
  border-left-color: #000;
  border-left-width: 2px;
`;
