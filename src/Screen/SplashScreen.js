import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../assets/index'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            temp();
        }, 3000);
    }, []);

    const temp = async () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <Image style={styles.logoIcon} source={Images.logoIcon} />
            </View>
            <Text style={styles.bottomText}>Copyright @2024</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8FCFE',
    },

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
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

    bottomText: {
        bottom: 30,
        alignSelf: "center"
    }
});

export default SplashScreen;
