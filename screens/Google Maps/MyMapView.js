// import React from 'react';
// import MapView from 'react-native-maps';
// import GlobalStyles from '../../Global Styles/GlobalStyles';
// import { SafeAreaView } from "react-native";
// const MyMapView = (props)=>{
//     return(
//         <SafeAreaView style={GlobalStyles.droidSafeArea}>
//         <MapView
//         style={{flex:1}}
//         region={props.region}
//         showUserLocation={true}
//         onRegionChange={(reg)=>props.onRegionChange(reg)}
//         >
//             <MapView.Marker
//             coordinate = {props.region} />
//         </MapView>
//         </SafeAreaView>
//     )
// }
// export default MyMapView;
import React from 'react';
import MapView, {Marker} from 'react-native-maps';

const MyMapView = (props) => {
    return (
        <MapView
            style={{ flex: 1 }}
            region={props.region}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}>

            <Marker
                coordinate={props.region} />
        </MapView>
    )
}
export default MyMapView;