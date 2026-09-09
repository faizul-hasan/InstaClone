import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '@utilities/constants/screens';
import Homescreen from '@screens/App/Home';
import ProfileScreen from '@screens/App/Profile';
import {
  DUMMY_PROFILE,
  Percentages,
  colors,
} from '@utilities/constants/common';
import React from 'react';
import { tabBar } from '@utilities/constants/labels';
import { BottomTabIcon } from '@utilities/CommonTypes';
import { DimensionValue, Image } from 'react-native';
import { TabBarStyle } from './styles';
import ReelsScreen from '@screens/App/Reels';
import ChatScreen from '@screens/App/Chat';
import SearchScreen from '@screens/App/Search';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabelStyle: TabBarStyle.tabBarlabel,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={screens.home}
        component={Homescreen}
        // options={{
        // //   tabBarIcon: ({color, focused, ...rest}: BottomTabIcon) =>
        // //     focused ? <HomeIcon fill={color} /> : <HomeOutline fill={color} />,
        //   tabBarLabel: tabBar.home,
        // }}
      />
      <Tab.Screen
        name={screens.Reels}
        component={ReelsScreen}
        // options={{
        // //   tabBarIcon: ({color, focused, ...rest}: BottomTabIcon) =>
        // //     focused ? (
        // //       <CategoryIcon fill={color} />
        // //     ) : (
        // //       <CategoryOutlineIcon fill={color} />
        // //     ),
        //   tabBarLabel: tabBar.reels,
        // }}
      />
      <Tab.Screen
        name={screens.Chat}
        component={ChatScreen}
        // options={{
        // //   tabBarIcon: ({color, focused, ...rest}: BottomTabIcon) =>
        // //     focused ? (
        // //       <OrdersIcon fill={color} />
        // //     ) : (
        // //       <OrdersOutlineIcon fill={color} />
        // //     ),
        //   tabBarLabel: tabBar.chatchat,
        // }}
      />
      <Tab.Screen
        name={screens.Search}
        component={SearchScreen}
        // options={{
        // //   tabBarIcon: ({color, focused, ...rest}: BottomTabIcon) =>
        // //     focused ? (
        // //       <OrdersIcon fill={color} />
        // //     ) : (
        // //       <OrdersOutlineIcon fill={color} />
        // //     ),
        //   tabBarLabel: tabBar.search,
        // }}
      />

      <Tab.Screen
        name={screens.profile}
        component={ProfileScreen}
        options={{
          //   tabBarIcon: ({color, focused, image, ...rest}: BottomTabIcon) => {
          //     if (image) {
          //       return (
          //         <Image
          //           style={{
          //             width: Percentages.hundred as DimensionValue,
          //             height: Percentages.hundred as DimensionValue,
          //             borderRadius: 50,
          //           }}
          //           source={{uri: DUMMY_PROFILE}}
          //         />
          //       );
          //     } else {
          //       return focused ? (
          //         <ProfileIcon fill={color} />
          //       ) : (
          //         <ProfileOutline fill={color} />
          //       );
          //     }
          //   },

          tabBarLabel: tabBar.profile,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
