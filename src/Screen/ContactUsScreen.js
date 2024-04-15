import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import Images from '../assets/index'

const ContactUsScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [message, setMessage] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.rowView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.backArrow} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Contact Form</Text>
            </View>
            <Text style={styles.headingSubTxt}>Just Say Hello!</Text>
            <View style={styles.textInputSecond}>
                <TextInput
                    style={styles.textInputInner}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={(text) => setFirstName(text)}
                    placeholderTextColor="#282828"
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    style={styles.textInputInner}
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={(text) => setlastName(text)}
                    placeholderTextColor="#282828"
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    style={styles.textInputInner}
                    placeholder="Your Email"
                    value={email}
                    onChangeText={(text) => setemail(text)}
                    placeholderTextColor="#282828"
                />
            </View>
            <View style={styles.messageView}>
                <TextInput
                    style={styles.messageTxt}
                    placeholder="Your Message"
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                    placeholderTextColor="#282828"
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.buttonView}>
                <Text style={styles.buttonTxt}>Let's Talk!</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    textInputSecond: {
        backgroundColor: "#EEEEEE",
        height: 40,
        width: 300,
        marginTop: 30,
        borderRadius: 20,
        justifyContent: 'center',
        marginLeft: 30,
    },

    textInput: {
        backgroundColor: "#EEEEEE",
        height: 40,
        width: 300,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        marginLeft: 30,
    },

    textInputInner: {
        paddingHorizontal: 20
    },

    messageTxt: {
        width: 250,
    },

    headingTxt: {
        color: "#000",
        textDecorationLine: 'underline',
        marginLeft: 25,
        fontSize: 30,
        // textAlign: "center"
    },

    headingSubTxt: {
        color: "#FF0000",
        marginTop: 15,
        marginLeft: 30,
        fontSize: 30,
    },

    messageView: {
        backgroundColor: "#D6D5F4",
        height: 200,
        width: 300,
        marginTop: 30,
        marginLeft: 30,
        borderRadius: 20,
        padding: 15
    },

    buttonView: {
        height: 50,
        width: 200,
        backgroundColor: "#FF0000",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        borderRadius: 20
    },

    buttonTxt: {
        color: "#fff",
        fontWeight: "800",
        fontSize: 18
    },

    rowView: {
        flexDirection: "row",
        marginTop: 50,
        marginLeft: 20
    },

    backIcon: {
        height: 25,
        width: 25
    }
});

export default ContactUsScreen;