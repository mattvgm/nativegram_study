import styled, {css} from 'styled-components/native';

interface IAvatarProps {
  type: 'none' | 'regular' | 'close' | 'seen';
}

export const Container = styled.View<IAvatarProps>`
  border-radius: 50px;
  padding: 2px;
  border-color: #000;
  border-width: 0px;

  ${(props) =>
    props.type === 'none' &&
    css`
      border-color: #000;
      border-width: 0px;
    `}

  ${(props) =>
    props.type === 'regular' &&
    css`
      border-color: #000;
      border-width: 3px;
    `}

  ${(props) =>
    props.type === 'seen' &&
    css`
      border-color: #969696;
      border-width: 2px;
    `}
    
    ${(props) =>
      props.type === 'close' &&
      css`
        border-color: #84d15d;
        border-width: 3px;
      `}

`;

export const StoryImage = styled.Image<IAvatarProps>`
  border-radius: 50px;
  border-color: #fff;
  border-width: 0px;
  ${(props) =>
    props.type === 'seen' &&
    css`
      border-width: 1px;
    `}
`;
