import React from 'react';
import {Component} from 'react';
import { View, Picker } from 'react-native';
import { TextInput, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';

// @ts-ignore
import SearchableDropdown from 'react-native-searchable-dropdown';

import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Products} from '../types/Product';
import { ImagePath } from 'src/types/ImagePath';


import { addProductImageService } from '../services/AddProductImageService';
import { getDeviceModelsService } from '../services/GetDeviceModelsService';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}

var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  }];

class AddItemScreen extends Component<Props, object> {

    state = {
        photo: null,
        selectedModel: null,
        models: null
      }

    handleChoosePhoto = () => {
        const options = {
          noData: false,
        }
        ImagePicker.launchImageLibrary(options, response => {
            console.log(response)
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
      }

    submitProduct = async () => {
            
      const image = {
        name: this.state.photo.fileName,
        type: this.state.photo.type,
        data: this.state.photo.data
      };

      var response = await addProductImageService(image);
      var obj = JSON.stringify(response);
      console.log("R3:" + obj);
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

    async componentDidMount() {
      try {
        console.log("componentDidMount")
        const models = await getDeviceModelsService();
        this.setState({ models });
      } catch (err) {
        // handle errors
      }
    }

    renderDeviceModelList = () => {
      if (this.state.models) {
        let deviceModels = this.state.models.map( (s, i) => {
          return <Picker.Item key={i} value={s} label={s} />
        });

        return deviceModels;
      }
    }

    render() {
        const {navigate} = this.props.navigation;



        return(
            <View>
                <TextInput> ID </TextInput>
                <Picker
                  selectedValue={this.state.selectedModel}
                  style={{ height: 50, width: 150 }}
                  onValueChange={(itemValue, itemIndex) => {
                    this.state.selectedModel=itemValue;
                  }}
                >
                  {/* <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" /> */}
                  {this.renderDeviceModelList()}
                </Picker>

                <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
                <Button 
                    title="Submit"
                    onPress={() => {
                      this.submitProduct(); 
                      navigate('dashboardScreen')
                    }} > Test
                </Button>
            </View>
        );
    }
}

export default AddItemScreen;