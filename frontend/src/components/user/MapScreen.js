import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapScreenStyles from './../../styles/MapScreenStyles';

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: this.props.navigation.state.params.location
                ? this.props.navigation.state.params.location
                : this.props.location
        };
    }

    render() {
        return (
            <View>
                <MapView
                    initialRegion={{
                        latitude: this.state.location.latitude,
                        longitude: this.state.location.longitude,
                        latitudeDelta: 0.0322,
                        longitudeDelta: 0.0151
                    }}
                    style={MapScreenStyles.mapView}
                    showsUserLocation={true}/>
            </View>
        );
    }
}
export default MapScreen;