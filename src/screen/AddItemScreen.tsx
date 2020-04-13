import React from 'react';
import {Component} from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<any, any>;
}
  
class AddItemScreen extends Component<Props, object> {
    render() {
        const {navigate} = this.props.navigation;
        return(
            <View>
                <TextInput> ID </TextInput>
                <TextInput> Model </TextInput>
                <Button 
                    title="Submit"
                    onPress={() => navigate('dashboardScreen')}>Test</Button>
            </View>
        );
    }
}

export default AddItemScreen;