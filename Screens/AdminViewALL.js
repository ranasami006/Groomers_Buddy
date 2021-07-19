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
    Picker,
    ToastAndroid,
    FlatList,
    Dimensions,
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import {deleteData, getAllOfCollection} from "../Screens/firbase/utility"
import { cond } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class AdminViewALL extends Component {
    state = {
        email: '',
        password: '',
        success: false,
        secured: true,
        lat: '',
        lng: '',
        ErrorMessege: '',
        c_tool: '4F Blade',
        c_tool1: '5F Blade',
        c_tool2: '7F Blade',
        c_tool3: '10 Blade',
        c_tool4: '15 Blade',
        breedName: '',
        imageuser: '',
        breedData:[],

    };
    async componentDidMount() {
        this.loadData()
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.loadData();
          });  
        
        
    }
    async loadData()
    { 
        this.setState({
            loader: true,
          })
          let data = await getAllOfCollection("breedData")
          await this.setState({
            breedData: data,
            loader: false,
            
          })
          console.log(data);

    }
    delteMe = async (item,index) => {
        const { breedData } = this.state;
        breedData.splice(index, 1);
        this.setState({ breedData, modalVisible:false});
        ToastAndroid.show("Recipie is deleted", ToastAndroid.SHORT)  
       console.log(item.id)
        let success =await deleteData("breedData",item.id)
    }
    

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#000"
                    barStyle="light-content"
                    translucent
                />
                <ScrollView style={{ marginBottom: 10 }}>
                    <View style={styles.header}>
                        <Text style={styles.headertext1}>Breeds Data</Text>
                    </View>
                     
                    {
                !this.state.loader?
                this.state.breedData && this.state.breedData.length?(
                    <View style={styles.bottomView}>    
                    <FlatList
                        data={this.state.breedData}
                            renderItem={({ item,index }) =>
                            <TouchableOpacity style={styles.listView}
                            onPress={() => {
                                this.setState({modalVisible:true,
                                    modelData:item,
                                modelIndex:index})  
                            }}
                            >
                                    <Text style={styles.listViewText}>{item.breedName}</Text>
                                    <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity 
                                          style={{
                                                
                                            alignSelf: 'center',
                                        }}
                                        onPress={
                                            () => this.props.navigation.navigate('EditHome',{
                                            Item:item
                                            })}
                                            >
                                        <Image
                                            source={require('../assets/clarity_edit_solid.png')}
                                            style={{
                                                width: 20, height: 21,
                                                alignSelf: 'center',
                                            }}></Image>
                                            </TouchableOpacity>
                                         <TouchableOpacity 
                                          style={{     
                                            alignSelf: 'center',
                                        }}
                                        onPress={() => this.delteMe(item,index)}>
                                        <Image
                                            source={require('../assets/fluent_delete_dismiss_24-filled_whitw_colour.png')}
                                            style={{
                                                width: 20, height: 21,
                                                alignSelf: 'center',
                                                margin:responsiveHeight(2),
                                            }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                    
                                </TouchableOpacity>
                                
                            }
                            ItemSeparatorComponent={this.renderSeparator}
                        />
                         </View>
            ):(
                <Text style={{textAlign:'center',fontSize: 15, color: 'black', fontWeight: 'bold',marginTop:windowHeight/4}}>please upload breed data</Text>
            )
            :
            <ActivityIndicator size={'large'} color={'black'} style={{marginTop:windowHeight/4}} />
            }
        
                   
               
               
                   
  
                </ScrollView>
                <TouchableOpacity
                        style={styles.button1}
                        onPress={() => {
                            
                               this.props.navigation.navigate('AdminHome');
                        }}>
                        {
                            this.state.success ?
                                <ActivityIndicator size={'small'} color={'black'} />
                                :
                                <Text style={[styles.buttonText, { color: '#fff' }]}>Upload Breed Data</Text>
                        }

                    </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    listView: {
        flexDirection:'row',
        backgroundColor: '#fca18e',
        width: windowWidth - 40,
        height: windowHeight / 11,
        borderRadius: responsiveWidth(5),
        alignSelf: 'center',
        //elevation: 25,
        opacity: 1,
        marginTop: responsiveHeight(2),
        justifyContent: 'space-between',
        alignContent:'center',
        marginBottom:responsiveHeight(2),
    },
    listViewText: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        paddingLeft: responsiveWidth(6),
       alignSelf:'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    buttonImageIconStyle: {
        //padding: 10,
        //margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonTextStyle: {
        color: '#fff',
        //marginBottom: 4,
        marginLeft: responsiveHeight(4),
        textAlign: 'center',
        fontSize: responsiveFontSize(1.7)
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 40,
    },
    header: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: responsiveHeight(15),
        //marginTop: responsiveHeight(10)
    },
    text: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        color: '#4f95e0',
    },
    text1: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: 'bold',
        color: '#4f95e0',
    },
    headertext: {
        fontSize: responsiveFontSize(4),
        //fontWeight: 'bold',
        alignSelf: 'center',
        color: 'white'
    },
    headertext1: {
        fontSize: 24,
        alignSelf: 'center',
        color: '#fca18e',
        fontWeight: '700'
    },
    bottomView: {
        alignSelf: 'center',
        borderRadius: responsiveWidth(2),
        //backgroundColor: '#000',
        marginTop: responsiveWidth(0),
    },
    label: {
        marginLeft: responsiveWidth(5),
        marginTop: responsiveWidth(5),
        fontSize: responsiveFontSize(1.8),
    },
    textInputContainer: {
        borderBottomWidth: responsiveWidth(0.3),
        borderColor: 'grey',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textinput: {
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        height: responsiveHeight(7),
        margin: responsiveHeight(1),
        padding: responsiveHeight(2),
        width: '95%',
    },
    textView: {
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: responsiveWidth(5),
        width: responsiveWidth(90),
        alignSelf: 'center',
    },

    button1: {
        height: responsiveHeight(7.5),
        width: responsiveWidth(42),
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fca18e',
        marginBottom:responsiveHeight(5),
        
    },
    buttonText: {
        fontSize: 18,
        color: 'grey',
        fontWeight: '400',
    },
    orText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: responsiveFontSize(3.4),

    }
});
