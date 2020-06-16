import styled from 'styled-components/native';

export const Container = styled.View`
  border: #000;
  border-width: 0px;
  margin-left: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 393px;
  width: 393px;
`;

export const ContentCount = styled.View`
  position: absolute;
  width: 40px;
  height: 25px;
  top: 10px;
  right: 30px;
  background-color: rgba(0, 0, 0, 0.4);
  border-width: 0;
  z-index: 10;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;

export const Picture = styled.Image`
  height: 395px;
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

export const BottomButtons = styled.View`
  margin-left: 5px;
  flex-direction: row;
  width: 130px;
  justify-content: space-between;
`;
