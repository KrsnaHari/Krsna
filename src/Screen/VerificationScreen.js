import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Images from '../assets/index'

const VerificationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.logoIcon} source={Images.logoIcon} />
                <TouchableOpacity style={styles.viewLogo} onPress={() => navigation.navigate('FaceScreen')}>
                    <Text style={styles.heading}>Scan your face for the verification of {"\n"} your ID</Text>
                    <Image source={Images.faceIcon} style={styles.faceIcon} />
                    <Text style={styles.subText}>Click here to verify your face</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("LandingPage")}>
                    <Text style={styles.skipText}>Skip this step</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.bottomText}>Copyright @2024</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "space-between",
        alignItems: "center"
    },

    logoIcon: {
        height: 100,
        width: 250,
        alignSelf: "center",
    },

    innerContainer: {
        alignSelf: "center",
        marginTop: 60,
    },


    viewLogo: {
        height: 200,
        width: 350,
        backgroundColor: "#D16666",
        borderRadius: 20,
        alignItems: "center"
    },

    heading: {
        color: "#FFFFFF",
        marginTop: 30,
        textAlign: "center",
        fontSize: 18
    },

    faceIcon: {
        height: 50,
        width: 50,
        marginTop: 15
    },

    subText: {
        marginTop: 15,
        color: "#000000",
        fontSize: 15,
        fontWeight: "600"
    },

    skipText: {
        marginTop: 15,
        color: "#85A6FC",
        fontSize: 15,
        fontWeight: "600",
        alignSelf: "center"
    },

    bottomText: {
        bottom: 30,
        alignSelf: "center"
    }

});

export default VerificationScreen;