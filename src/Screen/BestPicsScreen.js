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

const BestPicsScreen = ({ navigation }) => {
    const headerView = () => {
        return (
            <View style={styles.rowView}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={Images.backArrow} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headingTxStl}>Best Pics</Text>
            </View>)
    }
    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>
                <View style={styles.MainCntStl}>
                    {headerView()}

                    <View style={styles.firstCntView}>
                        <Image
                            source={Images.Img10} />
                        <Image source={Images.Img2} />
                    </View>
                    <View style={styles.rowView}>
                        <View>
                            <Image source={Images.Img3} />
                            <Image source={Images.Img2} />
                            {/* <Image source={Images.Img2} /> */}
                        </View>
                        <View>
                            <Image source={Images.Img4} style={styles.imageIcon} />
                            <Image source={Images.Img3} />
                            {/* <Image source={Images.Img2} /> */}
                        </View>

                    </View>
                    <View style={[styles.firstCntView, { alignItems: 'flex-start' }]}>
                        <Image source={Images.Img2} />
                        <View style={styles.bottomView}>
                            <Image source={Images.BestPicsImg} />
                            <Image source={Images.Img3} />
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BestPicsScreen;


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
    firstCntView: {
        marginHorizontal: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'center'
    },

    rowView: {
        flexDirection: "row"
    },

    backIcon: {
        height: 25,
        width: 25
    },

    imageIcon: {
        width: 170,
        height: 185
    },

    bottomView: {
        flexDirection: 'row',
        alignItems: 'center'
    }


});
