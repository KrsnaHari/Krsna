import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Images from '../assets/index'

const LandingPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>

            </View>
            <View style={styles.centerItem}>
                <Image style={styles.dummy_Icon} source={Images.DummyIcon} />
                <Image style={styles.logoIcon} source={Images.logoIcon} />
                <Text style={styles.headingTxt}>We capture the memories you make.</Text>
            </View>
            <TouchableOpacity style={styles.getButton} onPress={() => navigation.navigate('HomeNavigatorRoutes')}>
                <Text style={styles.getTxt}>Get Started</Text>
            </TouchableOpacity>
            <Text style={styles.bottomTxt}>Copyright @2024</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: 'space-between',
    },

    dummy_Icon: {
        height: 150,
        width: 250,
        resizeMode: "contain"
    },

    logoIcon: {
        height: 55,
        width: 300
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    headingTxt: {
        color: "#8E8E8E",
        fontSize: 20
    },

    getButton: {
        height: 40,
        width: 220,
        marginTop: 20,
        backgroundColor: "#85A6FC",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        alignSelf: "center"
    },

    bottomTxt: {
        alignSelf: "center",
        bottom: 30
    },

    getTxt: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff"
    }
});

export default LandingPage;