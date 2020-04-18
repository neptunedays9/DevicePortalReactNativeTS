

import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

// import React from 'react';
// import {Component} from 'react';
// import {NavigationScreenProp} from 'react-navigation';
// import {Button} from 'react-native-paper';
// import getItemsApi from '../services/getProductsService'

// interface Props {
//     navigation: NavigationScreenProp<any, any>;
// }
  
// class DashboardScreen extends Component<Props, object> {

//     componentDidMount () {
//         fetch('https://swapi.co/api/starships')
//           .then(response => response.json())
//           .then(response => this.setState({ 
//             starships: response.results,
//             loading: false
//           }))
//           .catch(error => this.setState({ 
//             loading: false, 
//             error: true 
//           }));
//       }

//     render() {
//         const { navigate } = this.props.navigation;
//         return (<View>
//         <TextInput>UserName</TextInput>
//         <TextInput>password</TextInput>
//         <Button mode="contained" onPress={() => navigate("dashboardScreen")}>
//             Login
//         </Button>
//     </View>);

//     }
// }

// export default DashboardScreen;

import React from 'react';
import getProductsService from '../services/getProductsService';

const DashboardScreen: React.FC<{}> = () => {
  const service = getProductsService();

  return (
    <View>
        <TextInput>UserName</TextInput>
        <TextInput>{service.status}</TextInput>
      {service.status === 'loading' && <Text>Loading...</Text>}
      {service.status === 'loaded' &&
        service.payload.results.map(product => (
          <Text> {product.id} </Text>
        ))}
      {service.status === 'error' && (
        <Text>Error, the backend moved to the dark side.</Text>
      )}
    </View>
  );
};

export default DashboardScreen;