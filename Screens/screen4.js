import React from 'react'
import {View,Text,Image, StyleSheet, ImageBackground, Button} from 'react-native'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems:'center'
    },
    tinyImage: {
      width: 170,
      height: 170,
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
        
    }
  });

const Screen4 = () => {
  return (
  <View style={styles.container}>
    <Text style={styles.text1}>Groomers <Text style={{ fontWeight: 'bold'}}>Buddy</Text> </Text>
    <Image
        style={styles.tinyImage}
        source={require('../assets/img/image1.png')}
      />
       <View>
          <Text style={{fontSize:25, marginTop:30, fontWeight:'bold'}}>Trimming Guide</Text>
      </View>

      <View style={{flex: 1, flexDirection: 'row', marginTop:20}}>
        <View style={styles.boxes}><Text style={{paddingTop:20, fontSize:20, color:'#ffc9c9', fontWeight:'bold'}}>Today</Text><Text style={{marginTop:8, fontSize:18, fontWeight:'bold'}}>19th Sept</Text></View>
        <View style={styles.boxes}><Text style={{paddingTop:20, fontSize:20, color:'#ffc9c9', fontWeight:'bold'}}>4 Weeks</Text><Text style={{marginTop:8, fontSize:18, fontWeight:'bold'}}>16th Oct</Text></View>
        <View style={styles.boxes}><Text style={{paddingTop:20, fontSize:20, color:'#ffc9c9', fontWeight:'bold'}}>6 Weeks</Text><Text style={{marginTop:8, fontSize:18, fontWeight:'bold'}}>30th Oct</Text></View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', marginTop:110}}>
        <View style={styles.boxes}><Text style={{paddingTop:20, fontSize:20, color:'#ffc9c9', fontWeight:'bold'}}>8 Weeks</Text><Text style={{marginTop:8, fontSize:18, fontWeight:'bold'}}>13th Nov</Text></View>
        <View style={styles.boxes}><Text style={{paddingTop:20, fontSize:20, color:'#ffc9c9', fontWeight:'bold'}}>10 Weeks</Text><Text style={{marginTop:8, fontSize:18, fontWeight:'bold'}}>27th Nov</Text></View>
        <View style={styles.boxes}><Text style={{paddingTop:20, fontSize:20, color:'#ffc9c9', fontWeight:'bold'}}>12 Weeks</Text><Text style={{marginTop:8, fontSize:18, fontWeight:'bold'}}>11th Dec</Text></View>
      </View>

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

export default Screen4;

  