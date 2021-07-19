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
} from 'react-native';
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { uploadProductImage, saveDataWithoutDocId, saveData } from "../Screens/firbase/utility"
import { cond } from 'react-native-reanimated';
export default class AdminHome extends Component {
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

    };
    async componentDidMount() {
        // connectFirebase()
    }
    uniqueID() {
        // this.setState({indicator: true});
        function chr4() {
            return Math.random()
                .toString(16)
                .slice(-4);
        }
        return (
            chr4() +
            chr4() +
            '-' +
            chr4() +
            '-' +
            chr4() +
            '-' +
            chr4() +
            '-' +
            chr4() +
            chr4() +
            chr4()
        );
    }

    imageuser = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            this.setState({ imageuser: result.uri });
            console.log(result)
        }

    }


    UploadData = async () => {
        this.setState({ success: true })
        if (this.state.breedName) {
            if (this.state.imageuser) {
                let imageName = this.uniqueID()
                let downloadURL = await uploadProductImage(this.state.imageuser, imageName);
                if (downloadURL) {
                    let success = await saveData('breedData',imageName, {
                        id: imageName,
                        breedName: this.state.breedName,
                        imageuser: downloadURL,
                        c_tool: this.state.c_tool,
                        c_tool1: this.state.c_tool1,
                        c_tool2: this.state.c_tool2,
                        c_tool3: this.state.c_tool3,
                        c_tool4: this.state.c_tool4,
                    })


                    ToastAndroid.show("Breed data is uploded successfully", ToastAndroid.SHORT);
                    this.setState({
                        breedName: "",
                        imageuser: "",
                        c_tool: '4F Blade',
                        c_tool1: '5F Blade',
                        c_tool2: '7F Blade',
                        c_tool3: '10 Blade',
                        c_tool4: '15 Blade',
                    })
                    this.setState({ success: false })

                }

            }
            else {
                this.setState({ ErrorMessege: "please select breed image first" })
            }
        }
        else {
            this.setState({ ErrorMessege: "Breed name cannot be empty" })
        }
        this.setState({ success: false })
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
                        <Text style={styles.headertext1}>Upload Breed Data</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <TextInput
                            style={styles.textinput}
                            placeholder={'Breed Name'}
                            placeholderTextColor={'grey'}
                            onSubmitEditing={() => this._password.focus()}
                            returnKeyType="next"
                            returnKeyLabel="next"
                            value={this.state.breedName}
                            onChangeText={(text) => {
                                this.setState({ breedName: text });
                            }}
                        />
                        <Picker
                            selectedValue={this.state.c_tool}
                            style={styles.textinput1}
                            onValueChange={(itemValue, itemIndex) => this.setState({ c_tool: itemValue })}>
                            <Picker.Item label="4F Blade" value="4F Blade" />
                            <Picker.Item label="5F Blade" value="5F Blade" />
                            <Picker.Item label="7F Blade" value="7F Blade" />
                            <Picker.Item label="10 Blade" value="10 Blade" />
                            <Picker.Item label="15 Blade" value="15 Blade" />
                            <Picker.Item label="1 Comb Attachment" value="1 Comb Attachment" />
                            <Picker.Item label="2 Comb Attachment" value="2 Comb Attachment" />
                            <Picker.Item label="3 Comb Attachment" value="3 Comb Attachment" />
                            <Picker.Item label="4 Comb Attachment" value="4 Comb Attachment" />
                            <Picker.Item label="5 Comb Attachment" value="5 Comb Attachment" />
                            <Picker.Item label="6 Comb Attachment" value="6 Comb Attachment" />
                            <Picker.Item label="7 Comb Attachment" value="7 Comb Attachment" />
                            <Picker.Item label="8 Comb Attachment" value="8 Comb Attachment" />
                            <Picker.Item label="Hand Scissored" value="Hand Scissored" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.c_tool1}
                            style={styles.textinput1}
                            onValueChange={(itemValue, itemIndex) => this.setState({ c_tool1: itemValue })}>
                            <Picker.Item label="4F Blade" value="4F Blade" />
                            <Picker.Item label="5F Blade" value="5F Blade" />
                            <Picker.Item label="7F Blade" value="7F Blade" />
                            <Picker.Item label="10 Blade" value="10 Blade" />
                            <Picker.Item label="15 Blade" value="15 Blade" />
                            <Picker.Item label="1 Comb Attachment" value="1 Comb Attachment" />
                            <Picker.Item label="2 Comb Attachment" value="2 Comb Attachment" />
                            <Picker.Item label="3 Comb Attachment" value="3 Comb Attachment" />
                            <Picker.Item label="4 Comb Attachment" value="4 Comb Attachment" />
                            <Picker.Item label="5 Comb Attachment" value="5 Comb Attachment" />
                            <Picker.Item label="6 Comb Attachment" value="6 Comb Attachment" />
                            <Picker.Item label="7 Comb Attachment" value="7 Comb Attachment" />
                            <Picker.Item label="8 Comb Attachment" value="8 Comb Attachment" />
                            <Picker.Item label="Hand Scissored" value="Hand Scissored" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.c_tool2}
                            style={styles.textinput1}
                            onValueChange={(itemValue, itemIndex) => this.setState({ c_tool2: itemValue })}>
                            <Picker.Item label="4F Blade" value="4F Blade" />
                            <Picker.Item label="5F Blade" value="5F Blade" />
                            <Picker.Item label="7F Blade" value="7F Blade" />
                            <Picker.Item label="10 Blade" value="10 Blade" />
                            <Picker.Item label="15 Blade" value="15 Blade" />
                            <Picker.Item label="1 Comb Attachment" value="1 Comb Attachment" />
                            <Picker.Item label="2 Comb Attachment" value="2 Comb Attachment" />
                            <Picker.Item label="3 Comb Attachment" value="3 Comb Attachment" />
                            <Picker.Item label="4 Comb Attachment" value="4 Comb Attachment" />
                            <Picker.Item label="5 Comb Attachment" value="5 Comb Attachment" />
                            <Picker.Item label="6 Comb Attachment" value="6 Comb Attachment" />
                            <Picker.Item label="7 Comb Attachment" value="7 Comb Attachment" />
                            <Picker.Item label="8 Comb Attachment" value="8 Comb Attachment" />
                            <Picker.Item label="Hand Scissored" value="Hand Scissored" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.c_tool3}
                            style={styles.textinput1}
                            onValueChange={(itemValue, itemIndex) => this.setState({ c_tool3: itemValue })}>
                            <Picker.Item label="4F Blade" value="4F Blade" />
                            <Picker.Item label="5F Blade" value="5F Blade" />
                            <Picker.Item label="7F Blade" value="7F Blade" />
                            <Picker.Item label="10 Blade" value="10 Blade" />
                            <Picker.Item label="15 Blade" value="15 Blade" />
                            <Picker.Item label="1 Comb Attachment" value="1 Comb Attachment" />
                            <Picker.Item label="2 Comb Attachment" value="2 Comb Attachment" />
                            <Picker.Item label="3 Comb Attachment" value="3 Comb Attachment" />
                            <Picker.Item label="4 Comb Attachment" value="4 Comb Attachment" />
                            <Picker.Item label="5 Comb Attachment" value="5 Comb Attachment" />
                            <Picker.Item label="6 Comb Attachment" value="6 Comb Attachment" />
                            <Picker.Item label="7 Comb Attachment" value="7 Comb Attachment" />
                            <Picker.Item label="8 Comb Attachment" value="8 Comb Attachment" />
                            <Picker.Item label="Hand Scissored" value="Hand Scissored" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.c_tool4}
                            style={styles.textinput1}
                            onValueChange={(itemValue, itemIndex) => this.setState({ c_tool4: itemValue })}>
                            <Picker.Item label="4F Blade" value="4F Blade" />
                            <Picker.Item label="5F Blade" value="5F Blade" />
                            <Picker.Item label="7F Blade" value="7F Blade" />
                            <Picker.Item label="10 Blade" value="10 Blade" />
                            <Picker.Item label="15 Blade" value="15 Blade" />
                            <Picker.Item label="1 Comb Attachment" value="1 Comb Attachment" />
                            <Picker.Item label="2 Comb Attachment" value="2 Comb Attachment" />
                            <Picker.Item label="3 Comb Attachment" value="3 Comb Attachment" />
                            <Picker.Item label="4 Comb Attachment" value="4 Comb Attachment" />
                            <Picker.Item label="5 Comb Attachment" value="5 Comb Attachment" />
                            <Picker.Item label="6 Comb Attachment" value="6 Comb Attachment" />
                            <Picker.Item label="7 Comb Attachment" value="7 Comb Attachment" />
                            <Picker.Item label="8 Comb Attachment" value="8 Comb Attachment" />
                            <Picker.Item label="Hand Scissored" value="Hand Scissored" />
                        </Picker>

                        <TouchableOpacity style={{
                            backgroundColor: '#fca18e',
                            width: 150, height: 150, borderRadius: 150 / 2, alignSelf: "center",
                            marginTop: responsiveHeight(0), justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={this.imageuser}>

                            <ImageBackground
                                source={{
                                    uri:
                                        this.state.imageuser
                                }}
                                borderRadius={150 / 2}
                                style={{
                                    width: 150, height: 150, borderRadius: 150 / 2, alignSelf: "center",
                                    marginTop: responsiveHeight(0), justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{ textAlign: 'center', color: 'black', fontSize: responsiveFontSize(1.7), fontWeight: 'bold' }}>Upload breed image</Text>
                                {/* <Ionicons name="camera-outline" size={45} 
                            color="white"
                                style={{ alignSelf: 'center' }}
                            /> */}
                            </ImageBackground>
                        </TouchableOpacity>

                        <Text style={{ textAlign: 'center', color: 'red', fontSize: responsiveFontSize(2) }}>{this.state.ErrorMessege}</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button1}
                        onPress={() => {
                            this.UploadData();
                            //   this.props.navigation.navigate('TabBar', { screen: 'Home' });
                        }}>
                        {
                            this.state.success ?
                                <ActivityIndicator size={'small'} color={'black'} />
                                :
                                <Text style={[styles.buttonText, { color: '#000' }]}>Submit</Text>
                        }

                    </TouchableOpacity>

                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
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
        //height: responsiveHeight(32),
        width: responsiveWidth(90),
        alignSelf: 'center',
        //borderRadius: responsiveWidth(2),
        //backgroundColor: '#fff',
        elevation: 1,
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
        marginTop: responsiveWidth(1),
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
