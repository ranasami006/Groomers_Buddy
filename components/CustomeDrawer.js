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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
                  size={responsiveHeight(5)}
                  style={{marginHorizontal:responsiveWidth(0)}}
                  />
                  </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(5) }]}>
                  Home
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
                <Text style={[styles.text1, { marginLeft: responsiveWidth(8) }]}>
                  Screen 2
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
                <Text style={[styles.text1, { marginLeft: responsiveWidth(8) }]}>
                Screen 3
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
                style={styles.imageDrawer}
                source={require('../assets/img/Screen4Icon.png')}></Image>
                </View>
                <Text style={[styles.text1, { marginLeft: responsiveWidth(8) }]}>
                Screen 4
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
     alignItems: 'center',
    marginTop: responsiveWidth(8),
    backgroundColor: 'white',
    
  },
  image: {
    height: responsiveHeight(5.5),
    width: responsiveHeight(26.2),
    marginHorizontal:responsiveWidth(3),
    top: 5
  },

  imageDrawer: {
    height: responsiveHeight(5.9),
    width: responsiveHeight(5),
    marginHorizontal:responsiveWidth(7),
  },
  bottomContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop: responsiveWidth(2),
    marginLeft: responsiveWidth(5),
  },
  text: {
    fontSize: responsiveFontSize(1.3),
    fontFamily: 'bold',
    marginLeft: responsiveWidth(4),
  },
  text1: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'bold',
    color: '#142F60',
    textAlign:'center',
  },
  tab: {
    flexDirection: 'row',
    width: '100%',
    marginTop: responsiveWidth(5),
    borderBottomWidth:1,
    borderColor:'#fd9681',
    padding:15,
    },
  icon: {
    height: responsiveHeight(5),
    width: responsiveHeight(5),
    borderRadius: responsiveHeight(6),
    //backgroundColor: 'white',
    //alignSelf: 'center',
    //justifyContent:'center',
    //alignContent:'center',
    alignItems:"center"
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
