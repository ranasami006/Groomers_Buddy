import * as React from 'react';
import { Button, View, Text,Image,StyleSheet,Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/home'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'
import Screen4 from '../Screens/screen4'
import CustomDrawer from './CustomeDrawer'
const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const OverViewStack = createStackNavigator();
const AppTabNavigator = createBottomTabNavigator();



// Main.navigationOptions = ({ navigation }) => {
//   let drawerLockMode = 'unlocked';
//   if (navigation.state.key > 0) {
//     drawerLockMode = 'locked-closed';
//   }

//   return {
//     drawerLockMode,
//   };
// };


const Main = () => {
  return (

      <MainStack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false, gestureEnabled: false }} >
          <MainStack.Screen name="Tab" component={Tab} />
          {/* <MainStack.Screen name="Screen2" component={Screen2} />
          <MainStack.Screen name="Screen3" component={Screen3} />
          <MainStack.Screen name="Screen4" component={Screen4} />
           <AppTabNavigator.Screen name="Home" component={Home} /> */}
            {/* <AppTabNavigator.Screen name="Screen2" component={Screen2} />
          <AppTabNavigator.Screen name="Screen3" component={Screen3} /> */}
           
      </MainStack.Navigator>
  );

}

Main.navigationOptions = ({ navigation }) => {
  let drawerLockMode = 'unlocked';
  if (navigation.state.key > 0) {
    drawerLockMode = 'locked-closed';
  }

  return {
    drawerLockMode,
  };
};


const Tab = () => {
  return (
      <AppTabNavigator.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
              } else if (route.name === 'Screen2') {
                  iconName = focused ? 'bell-outline' : 'bell-outline';
              } else if (route.name === 'Screen3') {
                  iconName = focused ? 'plus-box-outline' : 'plus-box-outline';
                  size = focused ? 40 : 40
              }
              else if (route.name === 'Screen4') {
                  iconName = focused ? 'history' : 'history';
              } 
              return <MaterialCommunityIcons name={iconName} size={size} color={color} backgroundColor={'blue'} />
          },
          // tabBarBadge: ({ focused, color, size }) => {
          //     if (route.name === 'OverView') {

          //     style=
          //     {
          //         height:12
          //     }
          // }
          // }
      })}


          tabBarOptions={{
            tabStyle:{
              //backgroundColor: 'blue',
            },
            showLabel: false,  
              activeTintColor: '#25435f',
              inactiveTintColor: '#fff',
              style: {
                  backgroundColor: 'white',
                  alignItems: 'center',
                  //height:60,
              },
          }}
      >
          <AppTabNavigator.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{backgroundColor:'#fd9d8a',borderRadius:10,width:'50%',height:'95%',justifyContent:'center',margin:10,padding:5}}>
                  <FontAwesome 
                  name={'calendar'}
                  color={'black'}
                  size={25}
                  style={styles.iconHome}
                  />
                  </View>
                  );
            },
          }}
           />
          <AppTabNavigator.Screen name="Screen2" component={Screen2} 
           options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{backgroundColor:'#fd9d8a',borderRadius:10,width:'50%',height:'95%',justifyContent:'center',margin:10,padding:5}}>
                <Image
                    source={require("../assets/img/Screen2Icon.png")}
                    style={styles.iconHome}
                  />
                  </View>
                  );
            },
          }}
          />
          <AppTabNavigator.Screen name="Screen3" component={Screen3} 
           options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{backgroundColor:'#fd9d8a',borderRadius:10,width:'50%',height:'95%',justifyContent:'center',margin:10,padding:5}}>
                <Image
                    source={require("../assets/img/Screen3Icon.png")}
                    style={styles.iconHome}
                  />
                  </View>
                  );
            },
          }}
          />
          <AppTabNavigator.Screen name="Screen4" component={Screen4}
           options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{backgroundColor:'#fd9d8a',borderRadius:10,width:'50%',height:'95%',justifyContent:'center',margin:10,padding:5,marginTop:5}}>
                <Image
                    source={require("../assets/img/Screen4Icon.png")}
                    style={styles.iconHome}
                  />
                  </View>
                  );
            },
          }}
           />
        
      </AppTabNavigator.Navigator >


  );
}

export default  App=()=> {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="Tab">
    //     <Drawer.Screen name="Forward Weeks" component={Tab} />
    //     <Drawer.Screen name="Consumables Cost" component={Tab2} />
    //     <Drawer.Screen name="Power Cost" component={Tab3} />
    //     <Drawer.Screen name="Trimming Guide" component={Tab4} />
    //   </Drawer.Navigator>
    // </NavigationContainer>


 <NavigationContainer>
<Drawer.Navigator initialRouteName="Main"
    //edgeWidth={0}
    drawerContent={props => <CustomDrawer {...props} />}
    statusBarAnimation={'slide'}
    hideStatusBar={false}
      drawerStyle={{
        backgroundColor: '#fff',
        width: responsiveWidth(70),
        borderTopRightRadius: 5,
    }}>
    
    <Drawer.Screen name="Main" component={Main} />
</Drawer.Navigator>
</NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  iconHome: {
    aspectRatio: 0.9,
    height: '80%',
    //marginLeft: 33,
    //marginTop: 13,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  bottomSafeAreaView: {
    marginLeft: 0,
    marginRight: 0,
    alignSelf: 'flex-end',
    width: Math.round(Dimensions.get('window').width),
    height: '100%',
    backgroundColor: 'white',
    
  },

})