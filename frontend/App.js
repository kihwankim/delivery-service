import React from 'react';
import HomeScreen from './src/components/HomeScreen';
import MapScreen from './src/components/user/MapScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const navigation = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Map: {
        screen: MapScreen
    }
}, {
    headerMode: "none",

    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'App'
    }
});

export default createAppContainer(navigation);