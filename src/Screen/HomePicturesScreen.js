import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Platform
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../assets/index'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

const HomePicturesScreen = ({ navigation }) => {
    const headerView = () => {
        return (
            <View style={styles.rowView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.backArrow} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headingTxStl}>Wedding Name or #</Text>
            </View>)
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>
                <View style={styles.MainCntStl}>
                    {headerView()}
                    <TouchableOpacity style={styles.ImageandTxView} onPress={() => navigation.navigate("BestPicsScreen")}>
                        <Image style={styles.widthView} source={Images.mypersonalPhoto} />
                        <View style={styles.ImageBottomTxView}>
                            <Text style={styles.ImageBtmTxStl}>My Personal</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ImageandTxView} onPress={() => navigation.navigate("BestPicsScreen")}>
                        <Image style={styles.widthView} source={Images.ringCeremony} />
                        <View style={styles.ImageBottomTxView}>
                            <Text style={styles.ImageBtmTxStl}>Ring Ceremony</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ImageandTxView} onPress={() => navigation.navigate("BestPicsScreen")}>
                        <Image style={styles.widthView} source={Images.preWeddingPhoto} />
                        <View style={styles.ImageBottomTxView}>
                            <Text style={styles.ImageBtmTxStl}>Pre-Wedding Shoot</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.ImageandTxView} onPress={() => navigation.navigate("BestPicsScreen")}>
                        <Image style={styles.widthView} source={Images.weddingPicsPhoto} />
                        <View style={styles.ImageBottomTxView}>
                            <Text style={styles.ImageBtmTxStl}>Pre-Wedding Shoot</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.ImageandTxView, { marginHorizontal: 20, marginVertical: 45 }]} onPress={() => navigation.navigate("BestPicsScreen")}>
                        <Image style={styles.widthView}source={Images.ringCeremony} />
                        <View style={styles.ImageBottomTxView}>
                            <Text style={styles.ImageBtmTxStl}>Your Favourites</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomePicturesScreen;


const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    MainCntStl: {
        paddingHorizontal: 10,
        marginBottom: 25
    },
    headingTxStl: {
        color: "#000000",
        fontFamily: "Akshar-SemiBold",
        fontSize: 23,
        // paddingVertical: 15,
        // backgroundColor:'red'
        marginLeft: 15,
        paddingBottom: 15
    },
    ImageandTxView: {
        marginBottom: 8
    },
    ImageBottomTxView: {
        backgroundColor: '#B1B1B1',
        width: '33%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        borderTopRightRadius: 10
    },
    ImageBtmTxStl: {
        fontFamily: 'AlumniSans-Regular',
        color: "#000000",
        fontSize: 14
    },

    rowView: {
        flexDirection: "row"
    },

    backIcon: {
        height: 25,
        width: 25
    },

    widthView: { width: '100%' }

});
