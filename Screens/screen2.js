import React from 'react'
import {View,Text,Image, StyleSheet, ImageBackground, Button, Dimensions} from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems:'center',
      backgroundColor:'red'
    },
    tinyImage: {
      width: 130,
      height: 130,
      marginTop: 30
    },
    logo: {
      width: 66,
      height: 58,
    },
    text1: {
        fontSize: 25
    },
    boxes: {
        width: '28%', 
        height: 100, 
        marginLeft:12, 
        backgroundColor: 'white',
        alignItems:'center',
        
    },
    containerProducts:{
      paddingTop: 40,
      paddingLeft: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      },
      productName: {
        alignSelf: 'flex-start',
      },
      minus:{
        width: 20,
        height: 20,
        borderRadius: 20/2,
        backgroundColor: 'red',
      },
      containerInfo:{
        paddingTop:15,
        flexDirection:'row',
        paddingLeft: 15,
      }
  });

const Screen2 = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.text1}>Groomers <Text style={{ fontWeight: 'bold'}}>Buddy</Text> </Text>
    <Image
        style={styles.tinyImage}
        source={require('../assets/img/image4.png')}
      />
       <View style={{alignItems:'center'}}>
          <Text style={{fontSize:22, marginTop:30, fontWeight:'bold'}}>Consumables Cost</Text>
          <Text style={{width:300, fontSize:18, textAlign:'center', marginTop:17}}>Calculate the cost of your shampoo, conditioner and othr treatments.</Text>
      </View>


      <View style={{}}>
        <Text style={{backgroundColor:'red', width:'100%'}}>check</Text>
      </View>


      <View style={{flex:1, alignSelf:'stretch'}}>
        <Text style={{color:'black', backgroundColor:'red'}}><Text style={{position:'absolute', right:0}}>Ali</Text> <Text style={{}}>Ahmed</Text> </Text>
      </View>
       {/* <VIew>
        <View style={styles.containerProducts}>
            <Text style={styles.productName}>1x 42 - Coca Cola 2L</Text>
            <View style={styles.minus}></View>
          </View>
       </VIew> */}



















      <View style={{}}>
        <ImageBackground source={require('../assets/img/image2.png')} style={{width:380,height:100, marginTop:150, resizeMode: "contain"}}>
          <Text style={{color:'white', padding:20, fontSize:16}}> Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
        </ImageBackground>
      </View>

      <View>
          <Icon
            size={80}
            name='arrow-right'
            color='#00aced' 
          />
        
      </View>
  </View>
 
  );
};

export default Screen2;

  