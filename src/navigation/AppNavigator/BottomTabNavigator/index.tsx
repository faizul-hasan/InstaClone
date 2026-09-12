/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '@utilities/constants/screens';
import Homescreen from '@screens/App/Home';
import ProfileScreen from '@screens/App/Profile';
import { colors, DUMMY_PROFILE } from '@utilities/constants/common';
import React from 'react';
import { tabBar } from '@utilities/constants/labels';
import { TabBarStyle } from './styles';
import ReelsScreen from '@screens/App/Reels';
import ChatScreen from '@screens/App/Chat';
import SearchScreen from '@screens/App/Search';
import HomeOutlineIcon from '@assets/Icons/HomeOutlineIcon';
import HomeIcon from '@assets/Icons/HomeIcon';
import { BottomTabIcon } from '@utilities/CommonTypes';
import ProfileIcon from '@assets/Icons/ProfileIcon';
import ProfileOutline from '@assets/Icons/ProfileOutline';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.black,
        tabBarLabelStyle: TabBarStyle.tabBarlabel,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={screens.home}
        component={Homescreen}
        options={{
          tabBarIcon: ({ color, focused }: BottomTabIcon) =>
            focused ? (
              <HomeIcon fill={color} />
            ) : (
              <HomeOutlineIcon fill={color} />
            ),
          tabBarLabel: tabBar.home,
        }}
      />
      <Tab.Screen
        name={screens.Reels}
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ focused }: BottomTabIcon) =>
            focused ? (
              <Image
                source={require('../../../assets/Icons/ReelIcon.png')}
                style={TabBarStyle.iconStyle}
              />
            ) : (
              <Image
                source={require('../../../assets/Icons/ReelOutlineIcon.png')}
                style={TabBarStyle.iconStyle}
              />
            ),
          tabBarLabel: tabBar.reels,
        }}
      />
      <Tab.Screen
        name={screens.Chat}
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }: BottomTabIcon) =>
            focused ? (
              <Image
                source={require('../../../assets/Icons/ChatIcon.png')}
                style={TabBarStyle.iconStyle}
              />
            ) : (
              <Image
                source={require('../../../assets/Icons/ChatOutlineIcon.png')}
                style={TabBarStyle.iconStyle}
              />
            ),
          tabBarLabel: tabBar.chat,
        }}
      />
      <Tab.Screen
        name={screens.Search}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }: BottomTabIcon) =>
            focused ? (
              <Image
                source={require('../../../assets/Icons/SearchIcon.png')}
                style={TabBarStyle.iconStyle}
              />
            ) : (
              <Image
                source={require('../../../assets/Icons/SearchOutlineIcon.png')}
                style={TabBarStyle.iconStyle}
              />
            ),
          tabBarLabel: tabBar.search,
        }}
      />

      <Tab.Screen
        name={screens.profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused, image }: BottomTabIcon) => {
            if (image) {
              return (
                <Image
                  style={TabBarStyle.profileIconStyle}
                  source={{ uri: DUMMY_PROFILE }}
                />
              );
            } else {
              return focused ? (
                <ProfileIcon fill={color} />
              ) : (
                <ProfileOutline fill={color} />
              );
            }
          },

          tabBarLabel: tabBar.profile,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
