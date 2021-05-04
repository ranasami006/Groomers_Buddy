import React from 'react'
import {
  View, Text, Image,
  TextInput,
  SafeAreaView, StyleSheet, ImageBackground, Button, Dimensions, StatusBar, ScrollView, TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation, DrawerActions } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Constants from 'expo-constants';
let deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    width: windowWidth,
    height: windowHeight - 50,
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
    width: 150,
    height: 135,
    marginTop: responsiveHeight(2),
  },
  tinyImageBg: {
    width: windowWidth / 2.1,
    height: windowHeight / 4,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
  },
  screenHeadingSection: {
    alignItems: 'center'
  },
  screenHeading: {
    fontSize: 20, marginTop: 5, fontWeight: 'bold'
  },
  screenHeadingContent: {
    textAlign: 'center',
    fontSize: 15,
    width: windowWidth / 1.1,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
  },
  boxesTextHeading: {
    paddingTop: 20,
    fontSize: 20,
    color: '#fd9d8a',
    fontWeight: 'bold'
  },
  boxesTextContent: {
    marginTop: 8, fontSize: 18, fontWeight: 'bold'
  },
  bottomImage: {
    width: deviceWidth, height: 100, marginTop: 20, resizeMode: "contain"
  },
  bottomImageContent: {
    color: 'white', padding: 20, fontSize: 16
  },
  boxesContainer: {
    flex: 1, flexDirection: 'row', marginTop: 20
  },
  boxesContainer2: {
    flex: 1, flexDirection: 'row', marginTop: 110
  },
  flexContainer: {   // A
    width: deviceWidth,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#d1c0c0',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  flexContainer2: {   // A
    paddingTop: 20,
    paddingBottom: 10,
    width: deviceWidth,
    minHeight: 50,
    borderBottomWidth: 1,
    borderColor: '#d1c0c0',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  flexContainerLeft: {
    flex: 3, paddingLeft: 20, paddingTop: 10, fontSize: 17, fontWeight: 'bold'
  },
  flexContainerRight: {
    flex: 1, paddingLeft: 20, paddingTop: 10, fontSize: 17, color: '#fd9d8a', fontWeight: 'bold'
  },
  flexContainerRight2: {
    flex: 1, paddingLeft: 100, paddingTop: 10, fontSize: 20, color: 'black', fontWeight: 'bold'
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
  SecondView: {
    width: deviceWidth - 50,
    height: responsiveHeight(5),
    borderBottomWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#d1c0c0',
    flexDirection: 'row',
    alignContent: "space-between",
    justifyContent: 'space-between',
    padding: responsiveHeight(1),
  },
  SecondViewTotal: {
    width: deviceWidth - 50,
    height: responsiveHeight(5),
    //borderBottomWidth: 1,
    //borderColor:'#d1c0c0',
    flexDirection: 'row',
    alignContent: "space-between",
    justifyContent: 'space-between',
    padding: responsiveHeight(1),
    marginTop: responsiveHeight(1),
    alignItems: 'center',
    alignSelf: 'center',
  },
  bottomView: {
    // marginTop: responsiveHeight(5),

  },
  SecondViewLeft: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  SecondViewRight: {
    color: '#fd9d8a',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
  },

});

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="white"
        barStyle="light-content"
        translucent
      />
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

      {/* <ScrollView style={styles.scrollView}> */}
      <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
        <View style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
        }}>
          <Image
            style={styles.tinyImage}
            source={require('../assets/groomers-assets/2ndpagedog.png')}
          />
        </View>
        <View style={styles.screenHeadingSection}>
          <Text style={styles.screenHeading}>Consumables Cost</Text>
          <Text style={styles.screenHeadingContent}>
            Calculate the cost of your shampoo, conditioner and other treatments.
            </Text>
        </View>


        <View style={styles.SecondView}>
          <Text style={styles.SecondViewLeft}>Mix Ratio (X:1)</Text>
          {/* <TextInput
           
            onChangeText={onChangeNumber}
            value={number}  
            
          /> */}
          <TextInput
            style={styles.SecondViewRight}
            placeholder="Ratio value"
            keyboardType="numeric"
          />
        </View>


        <View style={styles.SecondView}>
          <Text style={styles.SecondViewLeft}>Bottle Size (Ltr)</Text>
          <Text style={styles.SecondViewRight}>       5     ></Text>
        </View>
        <View style={styles.SecondView}>
          <Text style={styles.SecondViewLeft}>Cost of Bottle(£/$)</Text>
          <Text style={styles.SecondViewRight}>32.00   ></Text>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.SecondViewTotal}>
            <Text style={styles.SecondViewLeft}>Total Product Made</Text>
            <Text style={[styles.SecondViewRight, { color: 'black' }]}>100</Text>
          </View>
          <View style={styles.SecondViewTotal}>
            <Text style={styles.SecondViewLeft}>Cost Per Litre</Text>
            <Text style={[styles.SecondViewRight, { color: 'black' }]}>£0.32</Text>
          </View>
        </View>

        <View>
          <ImageBackground borderRadius={10} source={require('../assets/img/image2.png')} style={{
            width: windowWidth - 40,
            height: responsiveHeight(15),
            marginTop: 10,
            resizeMode: "contain",
            elevation: 10
          }}>
            <Text style={styles.bottomImageContent}> Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
          </ImageBackground>
        </View>
      </View>
      {/* </ScrollView> */}

    </SafeAreaView>
  );
};

export default Screen2;

