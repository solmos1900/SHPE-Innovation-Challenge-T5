// import getDirections from 'react-native-google-maps-directions'
 
// export default class gmapsDirections extends Component {
 
//   handleGetDirections = () => {
//     const data = {
//        source: {
//         latitude: -33.8356372,
//         longitude: 18.6947617
//       },
//       destination: {
//         latitude: -33.8600024,
//         longitude: 18.697459
//       },
//       params: [
//         {
//           key: "tAIzaSyCKTgb1G9VmWVQcUPKu9crBtttu80GoXSc",
//           value: "driving"        // may be "walking", "bicycling" or "transit" as well
//         },
//         {
//           key: "AIzaSyCKTgb1G9VmWVQcUPKu9crBtttu80GoXSc",
//           value: "navigate"       // this instantly initializes navigation using the given travel mode
//         }
//       ],
//       waypoints: [
//         {
//           latitude: -33.8600025,
//           longitude: 18.697452
//         },
//         {
//           latitude: -33.8600026,
//           longitude: 18.697453
//         },
//            {
//           latitude: -33.8600036,
//           longitude: 18.697493
//         }
//       ]
//     }
 
//     getDirections(data)
//   }
 
//   render() {
//     return (
//       <View style={styles.container}>
//         <Button onPress={this.handleGetDirections} title="Get Directions" />
//       </View>
//     );
//   }
// }