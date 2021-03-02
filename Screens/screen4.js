import React from 'react'
import {View,Text,Image,ScrollView, StyleSheet, ImageBackground, Button, Dimensions,StatusBar,TouchableOpacity,SafeAreaView } from 'react-native'
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { useNavigation, DrawerActions } from '@react-navigation/native';
let deviceWidth = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#fafafa',
      width:windowWidth,
      height:windowHeight-50, 
       },
    header: {
      flexDirection: 'row',
      marginLeft: responsiveWidth(2),
    },
    tinyImage: {
      marginTop:20,
      marginBottom:10,
      width: 180,
      height: 130,
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
        marginLeft:12, 
        backgroundColor: '#ffffff',
        alignItems:'center',
        borderRadius:10,
        elevation: 10,
        
    },
    screenHeadingSection:{
      alignItems:'center'
    },
    screenHeading: {
      fontSize:25, marginTop:30,marginBottom:20, fontWeight:'bold'
    },
    screenHeadingContent:{
      textAlign:'center',
      fontSize:18,
      width:380,
      marginTop:10,
      marginBottom:10
    },
    boxesTextHeading:{
      paddingTop:20, fontSize:20, color:'#fd9d8a', fontWeight:'bold'
    },
    boxesTextContent:{
      marginTop:8, fontSize:18, fontWeight:'bold'
    },
    bottomImage:{
      width:deviceWidth,height:100, marginTop:20, resizeMode: "contain"
    },
    bottomImageContent:{
      color:'white', padding:20, fontSize:16
    },
    boxesContainer:{
      flex: 1, flexDirection: 'row', marginTop:20
    },
    boxesContainer2:{
      flex: 1, flexDirection: 'row', marginTop:110
    },
    flexContainer: {   // A
      width: deviceWidth,
      height: 50,
      // borderBottomWidth: 1,
      borderColor:'#d1c0c0',
      flexDirection: 'row',      
      // backgroundColor:'white',       
  },
  flexContainer1: {   // A
    paddingTop:10,
    paddingBottom:10,
    width: deviceWidth,
    minHeight: 40,
    borderBottomWidth: 1,
    borderColor:'#d1c0c0',
    flexDirection: 'row',      
    backgroundColor:'white',       
},
  pawImage:{
    width:50
  },
  flexContainerLeft:{
    width:40, marginLeft:50, marginTop:5
  },
  flexContainerRight:{
    flex: 1, paddingLeft: 30, paddingTop:10, fontSize:19, color:'black', fontWeight:'bold' 
  },
  flexContainerRight2:{
    flex: 1, paddingLeft: 100, paddingTop:10, fontSize:20, color:'black' , fontWeight:'bold'
  },
  icon: {
    marginTop: responsiveWidth(5),
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
    
    
     <View style={styles.screenHeadingSection}>
      <Text style={styles.screenHeading}>Trimming Guide</Text>
    </View>
    {/* start */}
    <View style={styles.flexContainer1}>
      <Text style={{flex: 3, paddingLeft: 40,  fontSize:17, color:'grey', fontWeight:'bold'}}>Select Breed</Text>  
      <Text style={{flex: 1, paddingLeft: 20,  fontSize:17, color:'#fd9d8a', fontWeight:'bold' }}>         > </Text>
    </View>
    {/* end */}
   
    <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
        
    <Image
        style={styles.tinyImage}
        source={require('../assets/img/image5.png')}
    />
    </View>

    <View style={styles.flexContainer}>
      <Image style={styles.flexContainerLeft} source={require('../assets/img/paw1.png')} />
      <Text style={styles.flexContainerRight}>15 Blade</Text>
    </View>
    <View style={styles.flexContainer}>
      <Image style={styles.flexContainerLeft} source={require('../assets/img/paw2.jpg')} />
      <Text style={styles.flexContainerRight}>10 Blade</Text>
    </View>
    <View style={styles.flexContainer}>
      <Image style={styles.flexContainerLeft} source={require('../assets/img/paw3.png')} />
      <Text style={styles.flexContainerRight}>Blended Scissoring</Text>
    </View>
    <View style={styles.flexContainer}>
      <Image style={styles.flexContainerLeft} source={require('../assets/img/paw4.png')} />
      <Text style={styles.flexContainerRight}>7F Blade or 1 CA</Text>
    </View>
    <View style={styles.flexContainer}>
      <Image style={styles.flexContainerLeft} source={require('../assets/img/paw5.png')} />
      <Text style={styles.flexContainerRight}>Scissored</Text>
    </View>
    

       <View>
        <ImageBackground source={require('../assets/img/image2.png')} style={styles.bottomImage}>
          <Text style={styles.bottomImageContent}> Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
        </ImageBackground>
      </View>

      </ScrollView>


  </SafeAreaView>
  );
};

export default Screen4;

  