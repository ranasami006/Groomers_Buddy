import * as React from 'react';
import { Button, View, Text,Image,StyleSheet,Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/home'
import Screen2 from '../Screens/screen2'
import Screen3 from '../Screens/screen3'
import Screen4 from '../Screens/screen4'

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
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


const Tab = () => {
  return (
      <AppTabNavigator.Navigator 
      initialRouteName="Home"
      // screenOptions={({ route }) => ({
      //     tabBarIcon: ({ focused, color, size,backgroundColor }) => {
      //         let iconName;
      //         if (route.name === 'Home') {
      //             iconName = focused ? 'circle-slice-7' : 'circle-slice-7';
      //         } else if (route.name === 'Screen2') {
      //             iconName = focused ? 'bell-outline' : 'bell-outline';
      //         } else if (route.name === ' ') {
      //             iconName = focused ? 'plus-box-outline' : 'plus-box-outline';
      //             size = focused ? 40 : 40
      //         }
      //         else if (route.name === 'Screen4') {
      //             iconName = focused ? 'history' : 'history';
      //         }
      //         return <MaterialCommunityIcons name={iconName} size={size} color={color} backgroundColor={backgroundColor} />
      //     },
      // })}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
          style: {
          backgroundColor:'white',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0  
         },
      
        labelStyle: {
          fontSize: 12,
        },
      }}
      >
          <AppTabNavigator.Screen name="Home" component={Home} 
          options={{
            tabBarIcon: ({ focused }) => {
              return (
        
                  <Image
                    source={require("../assets/img/Screen2Icon.png")}
                    style={styles.iconHome}
                  />
                                 );
            },
          }}
          />
          <AppTabNavigator.Screen name="Screen2" component={Screen2} 
          />
          <AppTabNavigator.Screen name={' '} component={Screen3} />
          <AppTabNavigator.Screen name="Screen4" component={Screen4} />
          
          

      </AppTabNavigator.Navigator >
      

  );
}

const Tab2 = () => {
  return (
      <AppTabNavigator.Navigator 
      initialRouteName="Screen2"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName = focused ? 'circle-slice-7' : 'circle-slice-7';
              } else if (route.name === 'Screen2') {
                  iconName = focused ? 'bell-outline' : 'bell-outline';
              } else if (route.name === ' ') {
                  iconName = focused ? 'plus-box-outline' : 'plus-box-outline';
                  size = focused ? 40 : 40
              }
              else if (route.name === 'Screen4') {
                  iconName = focused ? 'history' : 'history';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          },
      })}
        tabBarOptions={{
              activeTintColor: '#25435f',
              inactiveTintColor: '#fff',
              style: {
                  backgroundColor: '#1ab6ff',
                  alignItems: 'center'
              },
          }}
      >
          <AppTabNavigator.Screen name="Home" component={Home} />
          <AppTabNavigator.Screen name="Screen2" component={Screen2} 
          />
          <AppTabNavigator.Screen name={' '} component={Screen3} />
          <AppTabNavigator.Screen name="Screen4" component={Screen4} />
          
          

      </AppTabNavigator.Navigator >
      

  );
}

const Tab3 = () => {
  return (
      <AppTabNavigator.Navigator 
      initialRouteName="Screen3"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName = focused ? 'circle-slice-7' : 'circle-slice-7';
              } else if (route.name === 'Screen2') {
                  iconName = focused ? 'bell-outline' : 'bell-outline';
              } else if (route.name === ' ') {
                  iconName = focused ? 'plus-box-outline' : 'plus-box-outline';
                  size = focused ? 40 : 40
              }
              else if (route.name === 'Screen4') {
                  iconName = focused ? 'history' : 'history';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          },
      })}
        tabBarOptions={{
              activeTintColor: '#25435f',
              inactiveTintColor: '#fff',
              style: {
                  backgroundColor: '#fff',
                  alignItems: 'center'
              },
          }}
      >
          <AppTabNavigator.Screen name="Home" component={Home} />
          <AppTabNavigator.Screen name="Screen2" component={Screen2} 
          />
          <AppTabNavigator.Screen name={' '} component={Screen3} />
          <AppTabNavigator.Screen name="Screen4" component={Screen4} />
          
          

      </AppTabNavigator.Navigator >
      

  );
}

const Tab4 = () => {
  return (
      <AppTabNavigator.Navigator 
      initialRouteName="Screen4"
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName = focused ? 'circle-slice-7' : 'circle-slice-7';
              } else if (route.name === 'Screen2') {
                  iconName = focused ? 'bell-outline' : 'bell-outline';
              } else if (route.name === ' ') {
                  iconName = focused ? 'plus-box-outline' : 'plus-box-outline';
                  size = focused ? 40 : 40
              }
              else if (route.name === 'Screen4') {
                  iconName = focused ? 'history' : 'history';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          },
      })}
        tabBarOptions={{
              activeTintColor: '#25435f',
              inactiveTintColor: '#fff',
              style: {
                  backgroundColor: '#1ab6ff',
                  alignItems: 'center'
              },
          }}
      >
          <AppTabNavigator.Screen name="Home" component={Home} />
          <AppTabNavigator.Screen name="Screen2" component={Screen2} 
          />
          <AppTabNavigator.Screen name={' '} component={Screen3} />
          <AppTabNavigator.Screen name="Screen4" component={Screen4} />
          
          

      </AppTabNavigator.Navigator >
      

  );
}

export default  App=()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tab">
        <Drawer.Screen name="Forward Weeks" component={Tab} />
        <Drawer.Screen name="Consumables Cost" component={Tab2} />
        <Drawer.Screen name="Power Cost" component={Tab3} />
        <Drawer.Screen name="Trimming Guide" component={Tab4} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconHome: {
    aspectRatio: 0.9,
    height: '100%',
    marginLeft: 33,
    marginTop: 13,
    alignSelf: 'flex-start',
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