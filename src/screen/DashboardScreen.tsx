

import { View, Text, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {Card, Button, Image} from 'react-native-elements';

import React from 'react';
import images from '../images/index.js';
import { getProductsService } from '../services/GetProductsService';
import { Item } from "react-native-paper/lib/typescript/src/components/List/List";

const DashboardScreen: React.FC<{}> = () => {
  const service = getProductsService();


  // console.log(service);
  return (
    <View style={{ flex: 1, margin: 5, backgroundColor: '#ddd', height: 130}}>
      {service.status === 'loading' && <Text>Loading...</Text>}
      {service.status === 'loaded' &&          
      <FlatList
            data={service.payload.devices}
            renderItem={RenderItem}
            // renderItem={service.payload.devices.map(product => <Product {...product}}
            // keyExtractor={product => product.id}
            numColumns={1}
          />
       }
      {service.status === 'error' && (
        <Text>Error, the backend moved to the dark side.</Text>
      )}
    </View>
  );
};

const RenderItem = (data) => {
  console.log(data);

  return (
    <Card>
      <Image source={images.iphone} style={styles.image}/>
           <Text style={{marginBottom: 10, marginTop: 20 }} h2>
               iPhone 7
           </Text>
           <Text style={styles.price} h4>
               {data.item.id}
           </Text>
           <Text h6 style={styles.description}>
               {data.item.description}
           </Text>
    </Card>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  name: {
      color: '#5a647d',
      fontWeight: 'bold',
      fontSize: 30
  },
  price: {
      fontWeight: 'bold',
      marginBottom: 10
  },
  description: {
      fontSize: 10,
      color: '#c1c4cd'
  },
  image: {
    height: 150, 
    width: 150, 
    flex: 1
  }
});