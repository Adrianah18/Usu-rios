import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Feed from '../screens/feed/Feed';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function Router() {

    return (
        <Tab.Navigator>
          <Tab.Screen
            name='Home'
            component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='home' size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name='Feed'
            component={Feed}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='rss' size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='user' size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      );
    }