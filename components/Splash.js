import React, { useState,useEffect } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, Button, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, Picker, } from 'react-native'
import { Icon } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
//import { DrawerActions } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import * as Progress from 'react-native-progress';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {connectFirebase } from "../Screens/firbase/firaseconfig"
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    width: windowWidth,
    height: windowHeight - 50,
    flex: 0,
    justifyContent: 'center',
  },
  topView: {
    //  backgroundColor: '#25435f',
    // height: responsiveHeight(17),
    //borderRadius: responsiveWidth(3),
  },
  scrollView: {
    // backgroundColor: 'pink',
    //marginBottom: 70,
  },

  header: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(5),
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: Constants.statusBarHeight,
  },
  tinyImage: {
    width: 190,
    height: 170,
    marginTop:responsiveHeight(5),
    transform: [{ rotateX: '180deg' }, { rotateZ: '180deg' }],
  },
  logoText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#757575',
    marginLeft: responsiveWidth(14),
    marginTop: responsiveWidth(5),
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'sans-serif-light'
  },
  logoSubText: {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
  },
  boxes: {
    width: '28%',
    height: 100,
    marginLeft: responsiveWidth(3),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,

  },
  boxexFocus: {
    width: '28%',
    height: 100,
    marginLeft: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#fca18e",
  },
  logo: {
    width: responsiveWidth(60),
    height: responsiveHeight(14),
    resizeMode: 'contain',
    marginLeft: responsiveWidth(10),
    marginTop: responsiveWidth(5),
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  screenHeading: {
    fontSize: 25, marginTop: 20, fontWeight: 'bold'
  },
  boxesTextHeading: {
    paddingTop: 20, fontSize: 20, color: '#fd9d8a', fontWeight: 'bold'
  },
  boxesTextHeadingFocus: {
    paddingTop: 20, fontSize: 21, color: '#fd9d8a', fontWeight: 'bold', elevation: 5,
  },

  boxesTextContent: {
    marginTop: 8, fontSize: 18, fontWeight: 'bold'
  },
  bottomImageContent: {
    color: 'white', padding: 20, fontSize: 16
  },
  boxesContainer: {
    flex: 1, flexDirection: 'row', marginTop: 20
  },
  boxesContainerFocus: {
    flex: 1, flexDirection: 'row', marginTop: 30, elevation: 5, borderColor: 'grey'
  },
  boxesContainer2: {
    flex: 1, flexDirection: 'row', marginTop: 20
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoImage: {
    width: windowWidth / 1.5,
    height: windowHeight/2,
    resizeMode: 'contain',
    alignSelf: 'center',
    
  },
});

const Splash = () => {
  useEffect(() => {
    // Update the document title using the browser API
    connectFirebase()
  });


  return (
   <>
   <View style={{alignContent:'center',justifyContent:'center',alignSelf:'center',flex:1}}>
    <Image style={styles.logoImage} source={require('../assets/groomers-assets/splashLogo.png')} />
    </View>
   
   <View style={{alignSelf:'center',justifyContent:'center',alignContent:'center',margin:5}}>
   {/* <Text style={{alignSelf:'center',fontSize:25,fontWeight:'bold',margin:5}}>Loading...</Text> */}
   {/* <Progress.Bar progress={0.8}  
   width={windowWidth-80} height={15} 
   borderRadius={6} 
   color={'rgba(252, 161, 142, 1)'}
   useNativeDriver/> */}
   <View style={{height: 50}}/> 
   </View>
</>
    );

}

export default Splash;

