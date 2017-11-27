import React, { Component } from 'react';
import { Constants, BlurView } from 'expo';

import { StyleSheet, Alert, View, Button, Picker } from 'react-native';
// You can import from local files
import AssetExample from './components/AssetExample';


      
   

export default class App extends Component<{}> {

  constructor(){

    super();

    this.state={

      PickerValueHolder : ''

    }
  }

  GetSelectedPickerItem=()=>{

    Alert.alert(this.state.PickerValueHolder);
  }

 render() {
   return (
     <View style={styles.MainContainer}>

         
      <Picker
        selectedValue={this.state.PickerValueHolder}

        onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >

        <Picker.Item label="Request1" value="Selected-Box-1"/>
        <Picker.Item label="Request2" value="Selected-Box-2" />
        <Picker.Item label="Request3" value= "Selected-Box-3" />
        <Picker.Item label="Request4" value="Selected-Box-4" />
        <Picker.Item label="Request5" value="Selected-Box-5" />
        <Picker.Item label="Request6" value="Selected-Box-6" />

      </Picker>


      <Button title="Get Selected Picker Value" onPress={ this.GetSelectedPickerItem } />

<AssetExample />
     </View>
   );
 }
}

const styles = StyleSheet.create({
 
 MainContainer: {
   flex: 1,
   justifyContent: 'center',
   margin: 20
   
 }

});

