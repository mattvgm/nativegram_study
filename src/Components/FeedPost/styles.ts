import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
`;
export const HeaderPost = styled.View`
  border: #000;
  border-width: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  margin-left: 5px;
  margin-right: 5px;
`;
export const PhotoCard = styled.View`
  border: #000;
  border-width: 1px;
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
  margin-right: 5px;
`;

export const CommentsBox = styled.View`
  border: #000;
  border-width: 0px;
  padding: 4px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const CommentsItem = styled.View`
  flex-direction: row;
  align-items: center;

  height: 20px;
`;
