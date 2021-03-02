import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, Button, TouchableOpacity, StatusBar, ScrollView,Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'
//import { DrawerActions } from '@react-navigation/drawer';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation, DrawerActions } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
    backgroundColor: '#fafafa',
    width:windowWidth,
    height:windowHeight,
  },
  topView: {
  //  backgroundColor: '#25435f',
   // height: responsiveHeight(17),
    //borderRadius: responsiveWidth(3),
},
header: {
  flexDirection: 'row',
  marginLeft: responsiveWidth(2),
},
  tinyImage: {
    width: 190,
    height: 170,
  },
  logoText: {
    fontSize: 25,
    fontWeight:'bold',
    color: '#676767',
    marginLeft: responsiveWidth(14),
    marginTop: responsiveWidth(5),
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoSubText: {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'sans-serif'
  },
  boxes: {
    width: '28%',
    height: 100,
    marginLeft: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,

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
  boxesTextContent: {
    marginTop: 8, fontSize: 18, fontWeight: 'bold'
  },
  bottomImageContent: {
    color: 'white', padding: 20, fontSize: 16
  },
  boxesContainer: {
    flex: 1, flexDirection: 'row', marginTop: 20
  },
  boxesContainer2: {
    flex: 1, flexDirection: 'row', marginTop: 20
  },
  icon: {
    marginTop: responsiveWidth(5),
},
});

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="light-content"
        translucent
      />
      <ScrollView>
        
          <View style={styles.header}>
            <TouchableOpacity
              
              onPress={() => {
                navigation.dispatch(DrawerActions.openDrawer());
              }}>
              <Entypo
                name={'menu'}
                color={'#fd9681'}
                size={responsiveWidth(12)}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.logoText}>Groomers <Text style={styles.logoSubText}>Buddy</Text> </Text>
          </View>


        <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
          <Image
            style={styles.tinyImage}
            source={require('../assets/img/image1.png')}
          />

          <Text style={styles.screenHeading}>Forward Weeks</Text>
        </View>

        <View style={styles.boxesContainer}>
          <View style={styles.boxes}><Text style={styles.boxesTextHeading}>Today</Text><Text style={styles.boxesTextContent}>19th Sept</Text></View>
          <View style={styles.boxes}><Text style={styles.boxesTextHeading}>4 Weeks</Text><Text style={styles.boxesTextContent}>16th Oct</Text></View>
          <View style={styles.boxes}><Text style={styles.boxesTextHeading}>6 Weeks</Text><Text style={styles.boxesTextContent}>30th Oct</Text></View>
        </View>

        <View style={styles.boxesContainer2}>
          <View style={styles.boxes}><Text style={styles.boxesTextHeading}>8 Weeks</Text><Text style={styles.boxesTextContent}>13th Nov</Text></View>
          <View style={styles.boxes}><Text style={styles.boxesTextHeading}>10 Weeks</Text><Text style={styles.boxesTextContent}>27th Nov</Text></View>
          <View style={styles.boxes}><Text style={styles.boxesTextHeading}>12 Weeks</Text><Text style={styles.boxesTextContent}>11th Dec</Text></View>
        </View>

        <View style={{}}>
          <ImageBackground borderRadius={10} source={require('../assets/img/image2.png')} style={{ width: 380, height: 100, marginTop: 20, resizeMode: "contain",elevation:10 }}>
            <Text style={styles.bottomImageContent}> Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
          </ImageBackground>
        </View>

       
      </ScrollView>
    </View>

  );
};

export default Screen1;

