import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform, Text} from 'react-native';
import {VectorIcon} from '../../../icons';
import {Colors} from '../../../utils/Colors';

const BottomBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {screenName: route.name});
          }
        };
        return (
          <TouchableOpacity
            key={`tab-${index}`}
            style={[
              styles.tabButton,
              isFocused ? styles.tabButtonFocused : null,
            ]}
            onPress={onPress}>
            <VectorIcon
              type={options.type}
              name={options.name}
              color={Colors.Black}
              size={25}
            />
            <Text style={[styles.labelText]}>
              {options.tabBarLabel || route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'android' ? 70 : 90,
    backgroundColor: Colors.White,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    paddingHorizontal: 15,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 10,
  },
  labelText: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Inter-Medium',
    color: Colors.Black,
  },
  tabButtonFocused: {
    backgroundColor: Colors.Orange,
  },
  creatpost: {
    height: 70,
    width: 70,
    backgroundColor: Colors.Yellow,
    borderRadius: 35,
    bottom: 20,
  },
});

export default BottomBar;
