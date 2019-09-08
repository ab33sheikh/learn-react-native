/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component,Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import placeImage from "./src/assets/download.jpg"
import PlaceInput from "./src/components/PlaceInput/PlaceInput"
import PlaceList from "./src/components/PlaceList/PlaceList"
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       places:[]
    };
    this.nameHeader = this.nameHeader.bind(this)
    // this.changeEventHandler=this.changeEventHandler.bind(this)
  };
  

  nameHeader=(val) => {
    this.setState({
      name:val
    })
  }

  placeSubmitHandler=(val)=>{
    this.setState(prevState=>{
      return{
        places:prevState.places.concat({
          key:Math.random(),
          value:prevState.name,
          image:placeImage
        })
      }
    })
  }
  placeDeleteHandler=(key)=>{
    this.setState((prevState)=>{
      return {
        places:prevState.places.filter((place)=>{
          return place.key!==key
        })
      }
    })
  }
  clearHeader=()=>{
    this.setState({
      name:""
    })
  }
  // changeEventHandler(e){
  //   console.log(e)
  // }
  render() {
    // const placeOutput=this.state.places.map((place,i)=>(
    // <ListItem key={i} placeName={place}/>
    //   ))
    return (
      
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* <Text> textInComponent </Text> */}
        {/* <TextInput style={styles.placeInput} 
        placeholder="enter input" value={this.state.name}
         onChangeText={(text)=>this.nameHeader(text)}  /> */}
         <PlaceInput
         style ={styles.placeInput}
         placeholder="enter input"
         value={this.state.name}
         onChangeText={(text)=>this.nameHeader(text)}
         />
        {/* <Text>{this.state.name}</Text> */}
      <Button title="add" 
      style={styles.placeButton}
      onPress={this.placeSubmitHandler}
      />
      
      </View>
      <PlaceList places={this.state.places} onItemDeleted={this.placeDeleteHandler}/>
    </View>

    )
  }
}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent:'flex-start',
    alignItems: 'center',
    margin:10
  },
  inputContainer:{
    //flex:1,
    width:"100%",
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:"center",
    
  },
  placeInput:{
    width:"100%",
    
  },
  placeButton:{
    width:"30%",
    
  },
  ListContainer:{
    width:"100%",
  }
});

export default App;
