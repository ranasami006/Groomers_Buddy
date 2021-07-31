import React, { Component } from 'react'
import {
  View, Text, Image, ScrollView,
  StyleSheet, ImageBackground, Button, Dimensions, StatusBar,
  TouchableOpacity, SafeAreaView, Picker,
  ActivityIndicator,
} from 'react-native'
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Constants from 'expo-constants';
let deviceWidth = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { getAllOfCollection } from "../Screens/firbase/utility";
import * as ScreenCapture from 'expo-screen-capture';
import * as MediaLibrary from 'expo-media-library';
import { render } from 'react-dom';
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // backgroundColor: '#fafafa',
    //width: windowWidth,
    //height: windowHeight,
  },
  topView: {
    //  backgroundColor: '#25435f',
    // height: responsiveHeight(17),
    //borderRadius: responsiveWidth(3),
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginBottom: 70,
    //height: windowHeight+200,
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
    marginTop: 1,
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
    //marginTop: 30,
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
    height: 25,
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
  bottomView: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: windowWidth / 2 + 20,
    //backgroundColor:"red"
  },
  imageView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 15

  },
  textinput: {
    width: '100%'
    // backgroundColor: "red",
    // borderRadius: 5,
    // elevation: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,

  },
});

 

export default class Screen4 extends Component {
  constructor (props) {
    super(props);
    this.state = {
    email: '',
    password: '',
    loader: false,
    secured: true,
    lat: '',
    lng: '',
    ErrorMessege: '',
    breedData: [],
    breedindex:1,
    }
  };
  async componentDidMount() {
    this.setState({
      loader: true,
    })
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === 'granted') {
      await ScreenCapture.preventScreenCaptureAsync();
    
    }
    let data = await getAllOfCollection("breedData")
    await this.setState({
      breedData: data,
      loader: false,
      
    })
   
    //console.log(this.state.breedData[this.state.breedindex].c_tool);
  }
  bannerError() {
    console.log("pakkkkk")
  }

  render() {
   
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
              this.props.navigation.openDrawer();
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
          <View style={{
            justifyContent: 'center',
            alignContent: 'center', alignSelf: 'center',
            marginTop: responsiveHeight(0)
          }}>
            <View style={styles.screenHeadingSection}>
              <Text style={styles.screenHeading}>Trimming Guide</Text>
            </View>
            {/* start */}
            <View style={styles.flexContainer1}>
              <Picker
                selectedValue={this.state.c_tool}
                style={styles.textinput}
                onValueChange={(itemValue, itemIndex) => this.setState({ c_tool: itemValue,breedindex:itemIndex })}>
                {
                  this.state.breedData.map((item, index) => {
                    return <Picker.Item value={item.breedName} label={item.breedName} key={index} />
                  })
                }
              </Picker>

            </View>
            {/* end */}

            {
            !this.state.loader?
            this.state.breedData && this.state.breedData.length?(
          
          <>
          
           
            <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>

              <Image
                style={styles.tinyImage}
                source={{uri:this.state.breedData[this.state.breedindex].imageuser}}
              />
            </View>
            <View style={styles.bottomView}>
              <View style={styles.imageView}>
                <Image style={styles.flexContainerLeft}
                  source={require('../assets/groomers-assets/pawprintgreen.png')} />
                <Text style={styles.flexContainerRight}>{this.state.breedData[this.state.breedindex].c_tool}</Text>
              </View>
              <View style={styles.imageView}>
                <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintblue.png')} />
                <Text style={styles.flexContainerRight}>{this.state.breedData[this.state.breedindex].c_tool1}</Text>
              </View>
              <View style={styles.imageView}>
                <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintyellow.png')} />
                <Text style={styles.flexContainerRight}>{this.state.breedData[this.state.breedindex].c_tool2}</Text>
              </View>
              <View style={styles.imageView}>
                <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintblack.png')} />
                <Text style={styles.flexContainerRight}>{this.state.breedData[this.state.breedindex].c_tool3}</Text>
              </View>
              <View style={styles.imageView}>
                <Image style={styles.flexContainerLeft} source={require('../assets/groomers-assets/pawprintpink.png')} />
                <Text style={styles.flexContainerRight}>{this.state.breedData[this.state.breedindex].c_tool4}</Text>
              </View>
            </View>
         </>
         ):
              <Text style={{textAlign:'center',fontSize: 15, color: 'black', fontWeight: 'bold',marginTop:windowHeight/4}}>No breed is uploaded yet</Text>
        :
        <ActivityIndicator size={'large'} color={'black'} style={{marginTop:windowHeight/4}} />
        }
            <View style={{alignSelf:'center',marginTop:10,marginBottom:10}}>
             
           <AdMobBanner
            bannerSize="mediumRectangle"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            servePersonalizedAds={true}
            onDidFailToReceiveAdWithError={this.bannerError} />
            </View>
          </View>
     
        </ScrollView>


      </SafeAreaView>
    );
  }
};


