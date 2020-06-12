import React, {useRef, useState, useCallback, Children} from 'react';
import {TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Container } from './styles';

interface IIconProps {
  icon: string;
  color: string;
}

interface IToggleButtonProps {
  size: number;
  icon: IIconProps;
  iconToggled: IIconProps;
}

const ToggleButton: React.FC<IToggleButtonProps> = ({
  size,
  icon,
  iconToggled,
  children,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const ToggleButtonRef = useRef(null);

  const handleLike = useCallback(() => {
    setIsLiked(!isLiked);
    ToggleButtonRef.current?.pulse();
  }, [isLiked]);
  return (
    <Animatable.View ref={ToggleButtonRef}>
      <TouchableOpacity onPress={handleLike}>
        <Icon
          name={isLiked ? iconToggled.icon : icon.icon}
          size={size}
          color={isLiked ? iconToggled.color : icon.color}
        />
      </TouchableOpacity>
      {children}
    </Animatable.View>
  );
};

export default ToggleButton;
