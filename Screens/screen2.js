import React from 'react'
import {View,Text,Image, StyleSheet, ImageBackground, Button, Dimensions, StatusBar,ScrollView,TouchableOpacity } from 'react-native'
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

let deviceWidth = Dimensions.get('window').width;

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
      fontSize:25, marginTop:10, fontWeight:'bold'
    },
    screenHeadingContent:{
      textAlign:'center',
      fontSize:18,
      width:320,
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
      borderBottomWidth: 1,
      borderColor:'#d1c0c0',
      flexDirection: 'row',      
      backgroundColor:'white',       
  },
  flexContainer2: {   // A
    paddingTop:20,
    paddingBottom:10,
    width: deviceWidth,
    minHeight: 50,
    borderBottomWidth: 1,
    borderColor:'#d1c0c0',
    flexDirection: 'row',      
    backgroundColor:'white',       
},
  flexContainerLeft:{
    flex: 3, paddingLeft: 20, paddingTop:10, fontSize:17, fontWeight:'bold'
  },
  flexContainerRight:{
    flex: 1, paddingLeft: 20, paddingTop:10, fontSize:17, color:'#fd9d8a' , fontWeight:'bold'
  },
  flexContainerRight2:{
    flex: 1, paddingLeft: 100, paddingTop:10, fontSize:20, color:'black' , fontWeight:'bold'
  },
  icon: {
    marginTop: responsiveWidth(5),
},
  });

const Screen2 = () => {
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
        source={require('../assets/img/image3.png')}
      />
      </View>
     <View style={styles.screenHeadingSection}>
      <Text style={styles.screenHeading}>Consumables Cost</Text>
      <Text style={styles.screenHeadingContent}>Calculate the cost of your shampoo, conditioner and other treatments.</Text>
    </View>



       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Mix Ratio (X:1)</Text>  
         <Text style={styles.flexContainerRight}>      20    ></Text>
       </View>
       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Bottle Size (ltr)</Text>  
         <Text style={styles.flexContainerRight}>       5     ></Text>
       </View>
       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Cost of Bottle</Text>  
         <Text style={styles.flexContainerRight}>£32.00  ></Text>
       </View>
       <View style={styles.flexContainer2}>
         <Text style={styles.flexContainerLeft}>Total Product Made</Text>  
         <Text style={styles.flexContainerRight2}>100</Text>
       </View>
       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Cost Per Litre</Text>  
         <Text style={styles.flexContainerRight2}>£0.32</Text>
       </View>
  

       <View>
        <ImageBackground source={require('../assets/img/image2.png')} style={styles.bottomImage}>
          <Text style={styles.bottomImageContent}> Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
        </ImageBackground>
      </View>


</ScrollView>

  </View>
  );
};

export default Screen2;

  