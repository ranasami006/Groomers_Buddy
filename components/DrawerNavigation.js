import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
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
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/home'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'
import Screen4 from '../Screens/screen4'
import CustomDrawer from './CustomeDrawer'
import Splash from './Splash'
hideAsync().catch(console.warn);
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

    <MainStack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false, 
    gestureEnabled: false }} >
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

    })}


      tabBarOptions={{
        tabStyle: {
          //backgroundColor: 'blue',
        },
        showLabel: false,
        activeTintColor: '#25435f',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: 'white',
          alignItems: 'center',
          height: 60,
        },
      }}
    >
      <AppTabNavigator.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              // focused?(
              //   <Image
              //   source={require("../assets/groomers-assets/Group8.png")}
              //   style={styles.iconHomeFoucsed}
              // />
              // ):(
              <View style={{ backgroundColor: '#e3986f', 
              borderRadius: 7, 
              width: '50%', height: '85%', 
              justifyContent: 'center', }}>
                <FontAwesome
                  name={'calendar'}
                  color={'white'}
                  size={32}
                  style={styles.iconCalender}
                />
              </View>

              //   <Image
              //   source={require("../assets/groomers-assets/Group8.png")}
              //   style={styles.iconHome}
              // />
              // )
            );
          },
        }}
      />
      <AppTabNavigator.Screen name="Screen2" component={Screen2}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              // focused?(
              //   <Image
              //   source={require("../assets/groomers-assets/Group9.png")}
              //   style={styles.iconHomeFoucsed}
              // />
              // ):(
              <View style={{ backgroundColor: '#e3986f', borderRadius: 7, width: '50%', height: '85%', justifyContent: 'center', }}>
                <Image
                  source={require("../assets/groomers-assets/shampoo.png")}
                  style={[styles.iconHome,{marginLeft:4,}]}
                />
              </View>
              // )
            );
          },
        }}
      />
      <AppTabNavigator.Screen name="Screen3" component={Screen3}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              // focused?(
              //   <Image
              //   source={require("../assets/groomers-assets/Group10.png")}
              //   style={styles.iconHomeFoucsed}
              // />
              // ):(
                <View style={{ backgroundColor: '#e3986f', borderRadius: 7, width: '50%', height: '85%', justifyContent: 'center', }}>
                <Image
                  source={require("../assets/groomers-assets/power.png")}
                  style={styles.iconHome}
                />
              </View>
              // )
            );
          },
        }}
      />
      <AppTabNavigator.Screen name="Screen4" component={Screen4}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              // focused?(
              //   <Image
              //   source={require("../assets/groomers-assets/Group11.png")}
              //   style={styles.iconHomeFoucsed}
              // />
              // ):(
                <View style={{ backgroundColor: '#e3986f', borderRadius: 7, 
                width: '50%', height: '85%', 
                justifyContent: 'center',alignContent:'center',alignItems:'center',alignSelf:'center' }}>
                <Image
                  source={require("../assets/groomers-assets/dog.png")}
                  style={styles.iconHome}
                />
              </View>
              // )
            );
          },
        }}
      />

    </AppTabNavigator.Navigator >


  );
}

export default App = () => {
  const [isLoadingSplash, setIsLoadingSplash] = useState(true);
  const init = (): void => {
    setTimeout(async () => {
      hideAsync().catch(console.warn);
      setIsLoadingSplash(false);
    }, 5000);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {isLoadingSplash && <Splash />}
      {!isLoadingSplash && (
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
      )}
    </>
  );
}

const styles = StyleSheet.create({
  iconHome: {
    aspectRatio: 1,
    height: '75%',
    height: '75%',
    resizeMode: 'contain',
    padding:5,
    marginLeft:7,
  },
  iconCalender: {
    //height: '85%',
    alignSelf: 'center',
  },
  iconHomeFoucsed: {
    aspectRatio: 1,
    height: '85%',
    borderWidth: 2,
    borderColor: '#fca18e',
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