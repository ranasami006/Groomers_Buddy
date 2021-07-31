import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  AsyncStorage,
  Alert,
  Linking,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
export default class CustomDrawer extends Component {
  state = {
    email: '',
  };

  async componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <StatusBar
            backgroundColor="white"
            barStyle="light-content"
            translucent
          />


        <View style={styles.profileView}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.closeDrawer();
                  }}>
                  <Entypo name={'cross'} color={'grey'} size={responsiveWidth(7)} />
                </TouchableOpacity>
              </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row',alignItems:"center" }}>
                <View style={[styles.icon,{marginHorizontal:responsiveWidth(2)}]}>
                <FontAwesome 
                  name={'calendar'}
                  color={'black'}
                  size={responsiveHeight(3.5)}
                  style={{marginHorizontal:responsiveWidth(0)}}
                  />
                  </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(1.2) }]}>
                  Pick Date
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Screen2');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                <Image
                style={styles.imageDrawer}
                source={require('../assets/img/Screen2Icon.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(4.3) }]}>
                Consumables Cost
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Screen3');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
              <Image
                style={styles.imageDrawer}
                source={require('../assets/img/Screen3Icon.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                Power Cost
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Screen4');
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                <Image
                style={[styles.imageDrawer,{width: responsiveHeight(5)}]}
                source={require('../assets/img/Screen4Icon.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                Summary of cut
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://groomersbuddy.app/')
              }}
              style={styles.tab}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                <Feather name="help-circle" size={24} color="black" />
                {/* <Image
                style={[styles.imageDrawer,{width: responsiveHeight(5)}]}
                source={require('../assets/groomers-assets/help.jpeg')}></Image> */}
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                Help
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}
              style={[styles.tab,{borderBottomWidth:0}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5),color:'white' }]}>
                Admin
              </Text>
              </View>
            </TouchableOpacity>
          </View>


        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor:"#9FCF3C",
  },
  profileView: {
   //marginTop:30,
    alignSelf:'flex-end',
   // alignItems: 'center',
    marginTop: responsiveWidth(6),
    backgroundColor: 'white',
    
  },
  image: {
    height: responsiveHeight(5.5),
    width: responsiveHeight(26.2),
    marginHorizontal:responsiveWidth(3),
    top: 5
  },

  imageDrawer: {
    height: responsiveHeight(5),
    width: responsiveHeight(4),
  },
  bottomContainer: {
    width: '95%',
    alignSelf: 'center',
    //justifyContent:'center',
    //alignContent:'center',
   // alignItems:'center',
   // marginTop: responsiveWidth(2),
    //marginLeft: responsiveWidth(5),
  },
  text: {
    fontSize: responsiveFontSize(1.3),
    //fontFamily: 'bold',
    marginLeft: responsiveWidth(4),
  },
  text1: {
    fontSize: responsiveFontSize(2.2),
    //fontFamily: 'bold',
    color: '#142F60',
    textAlign:'center',
  },
  tab: {
    flexDirection: 'row',
    width: '100%',
    marginTop: responsiveWidth(1),
    borderBottomWidth:1,
    borderColor:'#fd9681',
    padding:15,
    },
  icon: {
    height: responsiveHeight(6),
    width: responsiveHeight(5),
    //borderRadius: responsiveHeight(6),
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent:'center',
    alignContent:'center',
    // alignItems:"center"
  },
  buttonText:
  {
    fontSize: responsiveFontSize(1.8),
    color: 'grey',
    fontWeight: 'bold'
  },
  button1:
  {
    height: responsiveHeight(7),
    width: responsiveWidth(43),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(5),
    backgroundColor: '#4f95e0'

  },
  iconBack: {
    padding: 13,
},
});
