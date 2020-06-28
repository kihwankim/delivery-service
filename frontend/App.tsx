import React, {Component} from 'react';
import HomeScreen from './src/components/HomeScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
}, {
    headerMode: "none",

    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'App'
    }
});

export default createAppContainer(App);