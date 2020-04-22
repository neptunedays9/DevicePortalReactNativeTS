import React from 'react';
import {Component} from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Products} from '../types/Product';
import { ImagePath } from 'src/types/ImagePath';

import { addProductImageService } from '../services/AddProductImageService';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}
  
class AddItemScreen extends Component<Props, object> {

    state = {
        photo: null,
      }

    handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
            console.log(response)
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
      }

    submitProduct = () => {
      console.log(this.state.photo.fileName);
      
      const image = {
        name: this.state.photo.fileName,
        type: this.state.photo.type,
        uri: this.state.photo.uri
      }
      const response = addProductImageService(image);
    }

    createFormData = (photo : any) => {
      const data = new FormData();
    
      data.append("photo", {
        name: photo.fileName,
        type: photo.type,
        uri: photo.uri
      });
    
      return data;
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <TextInput> ID </TextInput>
                <TextInput> Model </TextInput>
                <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
                <Button 
                    title="Submit"
                    onPress={() => {
                      this.submitProduct(); 
                      navigate('dashboardScreen')
                    }}>Test</Button>
            </View>
        );
    }
}

export default AddItemScreen;