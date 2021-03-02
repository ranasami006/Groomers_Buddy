import React from 'react'
import {View,Text,Image,SafeAreaView, StyleSheet, ImageBackground, Button, Dimensions, StatusBar,ScrollView,TouchableOpacity } from 'react-native'
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
    height:windowHeight-50,
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
      marginTop:10,
      width: 150,
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
      fontSize:25, marginTop:10, fontWeight:'bold'
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
      height: 45,
      borderBottomWidth: 1,
      borderColor:'#d1c0c0',
      flexDirection: 'row',      
      backgroundColor:'white',       
  },
  flexContainer2: {   // A
    paddingTop:20,
    paddingBottom:10,
    width: deviceWidth,
    minHeight: 45,
    borderBottomWidth: 1,
    borderColor:'#d1c0c0',
    flexDirection: 'row',      
    backgroundColor:'white',       
},
  flexContainerLeft:{
    flex: 3, paddingLeft: 20, paddingTop:10, fontSize:17, fontWeight:'bold'
  },
  flexContainerRight:{
    flex: 1, paddingLeft: 20, paddingTop:10, fontSize:17, color:'#fd9d8a', fontWeight:'bold' 
  },
  flexContainerRight2:{
    flex: 1, paddingLeft: 100, paddingTop:10, fontSize:20, color:'black' , fontWeight:'bold'
  },
  icon: {
    marginTop: responsiveWidth(5),
},
  });

const Screen3 = () => {
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


        <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
    <Image
        style={styles.tinyImage}
        source={require('../assets/img/image4.png')}
      />
      </View>
     <View style={styles.screenHeadingSection}>
      <Text style={styles.screenHeading}>Power Cost</Text>
      <Text style={styles.screenHeadingContent}>Calculate the cost of running your electrical equipment.</Text>
    </View>



       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Kilowatts</Text>  
         <Text style={styles.flexContainerRight}>     20   ></Text>
       </View>
       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Hours Used Per Day</Text>  
         <Text style={styles.flexContainerRight}>       1   ></Text>
       </View>
       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Number of Days</Text>  
         <Text style={styles.flexContainerRight}>       1   ></Text>
       </View>
       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Electric Cost Per KWH</Text>  
         <Text style={styles.flexContainerRight}>£0.17  ></Text>
       </View>
       <View style={styles.flexContainer2}>
         <Text style={styles.flexContainerLeft}>Kilowatt Hours</Text>  
         <Text style={styles.flexContainerRight2}>100</Text>
       </View>
       <View style={styles.flexContainer}>
         <Text style={styles.flexContainerLeft}>Running Cost</Text>  
         <Text style={styles.flexContainerRight2}>£0.32</Text>
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

export default Screen3;

  