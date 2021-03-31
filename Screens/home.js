import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, Button, TouchableOpacity, ScrollView, Dimensions, SafeAreaView, Picker } from 'react-native'
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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
  },
  scrollView: {
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
    paddingTop: 20, fontSize: 18, color: '#fd9d8a', fontWeight: 'bold'
  },
  boxesTextHeadingFocus: {
    
    paddingTop: 20, 
    fontSize: 22,
    color: '#fd9d8a', 
    fontWeight: 'bold', 
    //elevation: 5,
  },

  boxesTextContent: {
    marginTop: 8, fontSize: 16, fontWeight: 'bold'
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
    width: windowWidth / 1.7,
    height: 40,
    resizeMode: 'contain',
    marginLeft: responsiveWidth(10),
    //marginTop: responsiveWidth(2),
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const Screen1 = () => {
  const navigation = useNavigation();
  const [focus1, setFocus1] = useState(true);
  const [focus2, setFocus2] = useState(false);
  const [focus3, setFocus3] = useState(false);
  const [focus4, setFocus4] = useState(false);
  const [focus5, setFocus5] = useState(false);
  const [focus6, setFocus6] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light" />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}>
          <Entypo
            name={'menu'}
            color={'#fca18e'}
            size={responsiveWidth(12)}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Image style={styles.logoImage} source={require('../assets/groomers-assets/logo.png')} />
      </View>
      <ScrollView style={styles.scrollView}>

        <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
          <Image
            style={styles.tinyImage}
            source={require('../assets/groomers-assets/Screen1dog.png')}
          />

          <Text style={styles.screenHeading}>Forward Weeks</Text>
        </View>
        <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.boxesContainer}>
            <View style={!focus1?[styles.boxes, { marginLeft: 0 }]:[styles.boxexFocus, { marginLeft: 0 }]}>
              <TouchableOpacity
                onPress={() => {
                  setFocus1(true),
                    setFocus2(false),
                    setFocus3(false),
                    setFocus4(false),
                    setFocus5(false),
                    setFocus6(false)
                }}>
                <Text style={!focus1 ? styles.boxesTextHeading : styles.boxesTextHeadingFocus}>Today</Text>
              </TouchableOpacity>
              <Text style={styles.boxesTextContent}>19th Sept</Text>
            </View>
            <View style={!focus2 ?styles.boxes:styles.boxexFocus}
              onPress={() => {

              }}
            >

              <TouchableOpacity
                onPress={() => {
                  setFocus1(false),
                    setFocus2(true),
                    setFocus3(false),
                    setFocus4(false),
                    setFocus5(false),
                    setFocus6(false)
                }}>
                <Text style={!focus2 ? styles.boxesTextHeading : styles.boxesTextHeadingFocus}>4 Weeks</Text>
              </TouchableOpacity>
              <Text style={styles.boxesTextContent}>16th Oct</Text>

            </View>
            <View style={!focus3 ?styles.boxes:styles.boxexFocus}
              onPress={() => {

              }}
            >

              <TouchableOpacity
                onPress={() => {
                  setFocus1(false),
                    setFocus2(false),
                    setFocus3(true),
                    setFocus4(false),
                    setFocus5(false),
                    setFocus6(false)
                }}
              >
                <Text style={!focus3 ? styles.boxesTextHeading : styles.boxesTextHeadingFocus}>6 Weeks</Text>
              </TouchableOpacity><Text style={styles.boxesTextContent}>30th Oct</Text></View>
          </View>

          <View style={styles.boxesContainer2}>
          <View style={!focus4?[styles.boxes, { marginLeft: 0 }]:[styles.boxexFocus, { marginLeft: 0 }]}>
        
            
              <TouchableOpacity
                onPress={() => {
                  setFocus1(false),
                    setFocus2(false),
                    setFocus3(false),
                    setFocus4(true),
                    setFocus5(false),
                    setFocus6(false)
                }}
              >
                <Text style={!focus4 ? styles.boxesTextHeading : styles.boxesTextHeadingFocus}>8 Weeks</Text>
              </TouchableOpacity>
              <Text style={styles.boxesTextContent}>13th Nov</Text></View>
              <View style={!focus5 ?styles.boxes:styles.boxexFocus}
   >
              <TouchableOpacity
            onPress={() => {
              setFocus1(false),
              setFocus2(false),
              setFocus3(false),
              setFocus4(false),
              setFocus5(true),
              setFocus6(false)
        
            }}
           >
              <Text style={!focus5? styles.boxesTextHeading:styles.boxesTextHeadingFocus}>10 Weeks</Text>
              </TouchableOpacity>
              <Text style={styles.boxesTextContent}>27th Nov</Text></View>
              <View style={!focus6 ?styles.boxes:styles.boxexFocus}
   >
            
             <TouchableOpacity
            onPress={() => {
              setFocus1(false),
              setFocus2(false),
              setFocus3(false),
              setFocus4(false),
              setFocus5(false),
              setFocus6(true)
        
            }}
           >
              <Text style={!focus6? styles.boxesTextHeading:styles.boxesTextHeadingFocus}>12 Weeks</Text>
              </TouchableOpacity>
              <Text style={styles.boxesTextContent}>11th Dec</Text></View>
          </View>

          <View style={{}}>
            <ImageBackground borderRadius={10} source={require('../assets/img/image2.png')} style={{
              width: windowWidth - 50,
              height: responsiveHeight(15),
              marginTop: 20,
              resizeMode: "contain",
              elevation: 10
            }}>
              <Text style={styles.bottomImageContent}> Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
            </ImageBackground>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>

  );
};

export default Screen1;

