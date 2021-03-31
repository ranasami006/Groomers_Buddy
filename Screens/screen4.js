import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, Button, Dimensions, StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Constants from 'expo-constants';
let deviceWidth = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    marginTop: 5,
    //marginBottom: 10,
    width: 240,
    height: 170,
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
    fontSize: 25,
    marginTop: 30,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  screenHeadingContent: {
    textAlign: 'center',
    fontSize: 18,
    width: 380,
    marginTop: 10,
    marginBottom: 10
  },
  boxesTextHeading: {
    paddingTop: 20, fontSize: 20, color: '#fd9d8a', fontWeight: 'bold'
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
    // borderBottomWidth: 1,
    borderColor: '#d1c0c0',
    flexDirection: 'row',
    // backgroundColor:'white',       
  },
  flexContainer1: {   // A
    paddingTop: 10,
    paddingBottom: 10,
    width: deviceWidth,
    minHeight: 40,
    borderBottomWidth: 1,
    borderColor: '#d1c0c0',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  pawImage: {
    width: 50
  },
  flexContainerLeft: {
    width: 25,
    height:25, 
    //marginLeft: 50, 
    marginTop: 5
  },
  flexContainerRight: {
    flex: 1, 
    paddingLeft: 30, 
    paddingTop: 10, fontSize: 17, color: 'black', fontWeight: 'bold'
  },
  flexContainerRight2: {
    flex: 1, paddingLeft: 100, paddingTop: 10, fontSize: 20, color: 'black', fontWeight: 'bold'
  },
  icon: {
    alignSelf:'center',
    justifyContent:'center',
    alignContent:'center',
  },
logoImage:{
  width: windowWidth / 1.7,
    height: 40,
    resizeMode: 'contain',
    marginLeft: responsiveWidth(10),
    //marginTop: responsiveWidth(2),
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
},
  bottomView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width:windowWidth/2 +20,
    //backgroundColor:"red"
  },
  imageView:{
      flexDirection:'row',
      alignSelf:'center',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
      marginTop:15

  },
});

const Screen4 = () => {
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

      <ScrollView>
      <View style={{ justifyContent: 'center', 
      alignContent: 'center', alignSelf: 'center', marginTop: responsiveHeight(0) }}>
        <View style={styles.screenHeadingSection}>
          <Text style={styles.screenHeading}>Trimming Guide</Text>
        </View>
        {/* start */}
        <View style={styles.flexContainer1}>
          <Text style={{ flex: 3, paddingLeft: 40, fontSize: 17, color: '#d3d3d3', fontWeight: 'bold' }}>Select Breed</Text>
          <Text style={{ flex: 1, paddingLeft: 20, fontSize: 17, color: '#fca18e', fontWeight: 'bold' }}>         > </Text>
        </View>
        {/* end */}

        <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>

          <Image
            style={styles.tinyImage}
            source={require('../assets/img/image5.png')}
          />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.imageView}>
            <Image style={styles.flexContainerLeft}
              source={require('../assets/groomers-assets/pawprintgreen.png')} />
            <Text style={styles.flexContainerRight}>15 Blade</Text>
          </View>
          <View style={styles.imageView}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintblue.png')} />
          <Text style={styles.flexContainerRight}>10 Blade</Text>
         </View>
          <View style={styles.imageView}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintyellow.png')} />
          <Text style={styles.flexContainerRight}>Blended Scissoring</Text>
          </View>
          <View style={styles.imageView}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintblack.png')} />
          <Text style={styles.flexContainerRight}>7F Blade or 1 CA</Text>
       </View>
          <View style={styles.imageView}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintpink.png')} />
          <Text style={styles.flexContainerRight}>Scissored</Text>
     </View>
        </View>

        {/* <View style={styles.flexContainer}>
          <Image style={styles.flexContainerLeft}
            source={require('../assets/groomers-assets/pawprintgreen.png')} />
          <Text style={styles.flexContainerRight}>15 Blade</Text>
        </View>
        <View style={styles.flexContainer}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintblue.png')} />
          <Text style={styles.flexContainerRight}>10 Blade</Text>
        </View>
        <View style={styles.flexContainer}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintyellow.png')} />
          <Text style={styles.flexContainerRight}>Blended Scissoring</Text>
        </View>
        <View style={styles.flexContainer}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintblack.png')} />
          <Text style={styles.flexContainerRight}>7F Blade or 1 CA</Text>
        </View>
        <View style={styles.flexContainer}>
          <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintpink.png')} />
          <Text style={styles.flexContainerRight}>Scissored</Text>
        </View> */}


        <View>
        <ImageBackground borderRadius={10} source={require('../assets/img/image2.png')} style={{
            width: windowWidth - 30,
            height: responsiveHeight(15),
            marginTop: 10,
            resizeMode: "contain",
            elevation: 10,alignSelf:'center'
          }}>
            <Text style={styles.bottomImageContent}> Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
          </ImageBackground>
        </View>
</View>
      </ScrollView>


    </SafeAreaView>
  );
};

export default Screen4;

