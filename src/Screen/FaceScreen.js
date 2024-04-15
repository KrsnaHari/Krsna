import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const FaceScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.centerView}>
                <View style={styles.faceContainer}>
                    <Text style={styles.faceText}>Your face Here</Text>
                </View>
                <Text style={styles.headingTxt}>Turn your face to the left {"\n"}<Text style={styles.headingSubTxt}>68%</Text> Done</Text>
            </View>
            <Text style={styles.bottomTxt}>Copyright @2024</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "space-between"
    },

    innerView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    logoIcon: {
        height: 100,
        width: 300
    },

    cancelText: {
        marginTop: 50,
        marginLeft: 30,
        color: "#85A6FC",
        fontSize: 20,
        fontWeight: "600"
    },

    centerView: {
        alignItems: 'center',
    },

    faceContainer: {
        height: 300,
        width: 300,
        borderRadius: 150,
        backgroundColor: "#D9D9D9",
        borderWidth: 5,
        borderColor: "#2CF11A",
        alignItems: 'center',
        justifyContent: "center"
    },

    faceText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "700"
    },

    headingTxt: {
        fontSize: 20,
        fontWeight: "600",
        marginTop: 15,
        textAlign: "center",
        color: "#000000"
    },

    headingSubTxt: {
        color: "#32C125"
    },

    bottomTxt: {
        bottom: 30,
        alignSelf: "center"
    }
});

export default FaceScreen;