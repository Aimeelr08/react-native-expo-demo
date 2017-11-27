import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';


// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.17.0


import "@expo/vector-icons"; // 6.2.0

import { MapView, Facebook } from "expo";

export default class AssetExample extends Component {
  state = {
    switchValue: true,
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
  };


  _handleToggleSwitch = () => Alert.setState(state => ({
    switchValue: !state.switchValue
  }));

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
     
    
         <Card title="Another Title Box">
          
           <Button
             title="Press me"
             onPress={this._handleButtonPress}
           />
         
        
         
     
         
         
        </Card>
           <MapView
             style={{ alignSelf: 'stretch', height: 100 }}
             region={this.state.mapRegion}
             onRegionChange={this._handleMapRegionChange}
           />
           <Button
             title="Login with Facebook"
             onPress={this._handleFacebookLogin}
           />
         
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

});