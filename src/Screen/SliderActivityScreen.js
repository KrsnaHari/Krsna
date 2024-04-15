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
import Swiper from 'react-native-swiper';

const SliderActivityScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView>
                <View style={styles.MainCntStl}>
                    <Swiper autoplay={true}
                        autoplayTimeout={3}>
                        <View style={styles.SliderView}>
                            <Image source={Images.sliderImg1} />
                                <Text style={styles.SwiperTitle}>Location</Text>
                                <Text>The Location will be shown with the</Text>
                                <Text>respective map image.</Text>
                            <View>
                            </View>
                        </View>
                        <View style={styles.SliderView}>
                            <Image source={Images.sliderImg2} />
                                <Text style={styles.SwiperTitle}>About The Company</Text>
                            <Text>The Location will be shown with the</Text>
                                <Text>respective map image.</Text>
                            <View>
                            </View>
                        </View>
                    </Swiper>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SliderActivityScreen;


const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    MainCntStl: {
        paddingHorizontal: 10,
        marginBottom: 25,
        height: dh / 1.2
    },
    SliderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    SwiperTitle:{
        fontSize:18,
        fontWeight:'bold'
    }

});
