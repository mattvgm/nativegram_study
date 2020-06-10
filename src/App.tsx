import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Pages/Home/';
import Icon from 'react-native-vector-icons/Feather';
import {shade} from 'polished';
import {StatusBar} from 'react-native';
const BottomTab = createBottomTabNavigator();

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#3e3e3e'} />
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{showLabel: false, activeTintColor: '#000'}}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Icon
                name="home"
                color={focused ? color : '#000'}
                size={focused ? 38 : 32}
              />
            ),
          }}
        />

        <BottomTab.Screen
          name="Home 2"
          component={Home}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Icon
                name="search"
                color={focused ? color : shade('0.2', color)}
                size={focused ? 38 : 32}
              />
            ),
          }}
        />

        <BottomTab.Screen
          name="Home 3"
          component={Home}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Icon
                name="plus-circle"
                color={focused ? color : shade('0.2', color)}
                size={focused ? 38 : 32}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Home 4"
          component={Home}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Icon
                name="heart"
                color={focused ? color : shade('0.2', color)}
                size={focused ? 38 : 32}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Home 5"
          component={Home}
          options={{
            tabBarIcon: ({color, size, focused}) => (
              <Icon
                name="circle"
                color={focused ? color : shade('0.2', color)}
                size={focused ? 38 : 32}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
