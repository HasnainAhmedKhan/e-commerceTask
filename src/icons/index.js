import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const VectorIcon = ({name, color, size, type, style, onPress}) => {
  switch (type) {
    case 'FontAwesome':
      return (
        <FontAwesome
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'Feather':
      return (
        <Feather
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={name}
          color={color}
          size={size}
          style={style}
          onPress={onPress}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          color={color}
          size={size}
          style={style}
        />
      );
    default:
      return <></>;
  }
};
