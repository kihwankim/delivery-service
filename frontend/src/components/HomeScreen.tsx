import React, {Component} from 'react';
import * as FONT from 'expo-font';
import {StatusBar} from 'expo-status-bar';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import HomeScreenStyle from '../styles/HomeScreenStyle'

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
              location: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              }
            });
          });
    }

    render() {
        return (
            <View style={HomeScreenStyle.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <Text>Hello World</Text>
                <Text>My new Homepage</Text>
                <StatusBar style="auto"/>
            </View>
        );
    }
}


export default HomeScreen;