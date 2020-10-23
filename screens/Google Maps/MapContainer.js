// import React from 'react';
// import GooglePlacesInput from './GooglePlacesTest';
// import MyMapView from './MyMapView';
// import { getLocation, geocodeLocationByName } from './Services/location-service';
// import GlobalStyles from '../../Global Styles/GlobalStyles';
// import { View,TextInput, TouchableOpacity, Button, Text,Platform, StatusBar, Slider,StyleSheet,Images} from "react-native";
// import { SafeAreaView } from 'react-navigation';
// class MapContainer extends React.Component {
//     state = {
//         region: {}
//     };

//     componentDidMount() {
//         this.getInitialState();
//     }

//     getInitialState() {
//         getLocation().then(
//             (data) => {
//                 console.log(data);
//                 this.setState({
//                     region: {
//                         latitude: data.latitude,
//                         longitude: data.longitude,
//                         latitudeDelta: 0.003,
//                         longitudeDelta: 0.003
//                     }
//                 });
//             }
//         );
//     }

//     getCoordsFromName(loc) {
//         this.setState({
//             region: {
//                 latitude: loc.lat,
//                 longitude: loc.lng,
//                 latitudeDelta: 0.003,
//                 longitudeDelta: 0.003
//             }
//         });
//     }

//     onMapRegionChange(region) {
//         this.setState({ region });
//     }

//     render() {
//         return (

//             <SafeAreaView style={styles.AndroidSafeArea}>
//                 <View style={{ flex: 1 }}>
//                     <GooglePlacesInput notifyChange={(loc) => this.getCoordsFromName(loc)}
//                     />
//                 </View>

//                 {
//                     this.state.region['latitude'] ?
//                         <View style={{ flex: 1 }}>
//                             <MyMapView
//                                 region={this.state.region}
//                                 onRegionChange={(reg) => this.onMapRegionChange(reg)} />
//                         </View> : null}
//             </SafeAreaView>
//         );
//     }
// }
// const styles = StyleSheet.create({
//     avatar: {
//       width: 140,
//       height: 140,
//       borderRadius: 63,
//       borderWidth: 4,
//       borderColor: "#FFFFFF",
//       marginBottom:10,
//     },
//     image:{
//       width: 60,
//       height: 60,
//     },
//     headerContent:{
//         padding:30,
//         alignItems: 'center',
//       },
//       AndroidSafeArea: {
//         flex: 1,
//         backgroundColor: "white",
//         paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
//       },
    
//   });
// export default MapContainer;
 
import React from 'react';
import { View } from 'react-native';
import GooglePlacesInput from '../Google Maps/GooglePlacesTest';
import MyMapView from '../Google Maps/MyMapView';
import { getLocation, geocodeLocationByName } from '../Google Maps/Services/location-service';
import GmapsDirections from '../Google Directions/GoogleDirectionsTest';
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
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <GooglePlacesInput notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                    <GmapsDirections></GmapsDirections>
                </View>

                {
                    this.state.region['latitude'] ?
                        <View style={{ flex: 1 }}>
                            <MyMapView
                                region={this.state.region}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                        </View> : null}
            </View>
        );
    }
}

export default MapContainer;