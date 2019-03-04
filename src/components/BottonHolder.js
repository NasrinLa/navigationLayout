import React, {Component} from 'react';
import {Image , StyleSheet, Text, View , Platform , TouchableOpacity  } from 'react-native';
import { createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingUpPage from '../pages/SingUpPage'
import  SearchPage from '../pages/Search'

const RootStack = createBottomTabNavigator(
    {
      Home: {
        screen: SingUpPage,
            navigationOptions: {
              tabBarIcon: ({ tintColor:color}) => (
             <Icon name="home" size={30} color={color} />
           )
        }
     },
     Same: {
      screen: SearchPage,
          navigationOptions: {
            tabBarIcon: ({ tintColor:color}) => (
             <Icon name="search" size={30} color={color} />
           )
        }
        },
      Same1: {
        screen: SearchPage,
            navigationOptions: {
              tabBarIcon: ({ tintColor:color}) => (
                <Image  style = {{width : 30 , height : 30 , borderRadius :100}} source = {require('../accest/3.jpg')}/>
              )
          }
        }
      },
    {
        initialRouteName : 'Home',
        tabBarOptions: {
            showLabel : false,
            tabTransparent : true,
            tabStyle: {
              height : 40,
              marginBottom: 5
            },
            activeTintColor: 'white',
            inactiveTintColor: 'rgba(255,255,255,.5)',
            style: {
                backgroundColor: 'transparent',
            },
            indicatorStyle: {
                backgroundColor: 'transparent',
            },
        }
    }

  );

export default createAppContainer(RootStack);
