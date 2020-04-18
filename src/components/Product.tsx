// import React from 'react';
// import {Component} from 'react';
// import { View, Image, Text } from 'react-native';
// import { TextInput, Button } from 'react-native';
// import { NavigationScreenProp } from 'react-navigation';
// import { Card } from 'react-native-paper';

// interface Props {
//     navigation: NavigationScreenProp<any, any>;
// }

// class Product extends Component<Props, object> {
//     render() {
//         const {navigate} = this.props.navigation;
//         return(
//             <Card>
//                 <Image source={images.iphone} style= {{height: 350, width: null, flex: 1}}/>
//                 <Text style={{marginBottom: 10, marginTop: 20 }} h2>
//                     iPhone 7
//                 </Text>
//                 <Text style={styles.price} h4>
//                     $ 200
//                 </Text>
//                 <Text h6 style={styles.description}>
//                     added 2h ago
//                 </Text>
//                 <Button
//                     type="clear"
//                     title='Buy now'
//                     onPress={() => this.props.navigation.navigate('Details')} />
//             </Card>
//         );
//     }
// }

// export default AddItemScreen;