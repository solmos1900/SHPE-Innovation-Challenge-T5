import React from 'react';
import { View } from 'react-native';
import GooglePlacesInput from '../screens/GooglePlacesTest';
import MyMapView from './MyMapView';
import { getLocation, geocodeLocationByName } from '../routes/Services/location-service';
import GlobalStyles from '../routes/Global Styles/GlobalStyles';
import { SafeAreaView } from "react-native";

class MapContainer extends React.Component {
    state = {
        region: {}
    };

    componentDidMount() {
        this.getInitialState();
    }

    getInitialState() {
        getLocation().then(
            (data) => {
                console.log(data);
                this.setState({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                });
            }
        );
    }

    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (

            <SafeAreaView style={GlobalStyles.droidSafeArea}>
                <View style={{ flex: 1 }}>
                    <GooglePlacesInput notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                </View>

                {
                    this.state.region['latitude'] ?
                        <View style={{ flex: 1 }}>
                            <MyMapView
                                region={this.state.region}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                        </View> : null}
            </SafeAreaView>
        );
    }
}

export default MapContainer;