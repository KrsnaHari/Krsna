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

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View>
          <Text style={styles.headingTx}>KRSNA</Text>
          <Image
            style={styles.handImageStle}
            source={Images.handImage} />
          <Text style={styles.headingTx2}>KRSNA</Text>
          <View style={styles.TxInput_alreadyTxCnt}>
            <Text style={styles.TxmoreStl}>Already have an Event ID?</Text>
            <View style={styles.TxInput_submit_Row}>
              <View style={styles.TextInputViewCnt}>
                <TextInput
                  style={styles.TextInputStl}
                  placeholder='Enter Event ID here'
                  placeholderTextColor="#838383"/>
                <TextInput
                  style={styles.TextInputStl}
                  placeholder='Password'
                  placeholderTextColor="#838383" />
              </View>
              <View>
                <TouchableOpacity style={styles.submitBtn} onPress={() => navigation.navigate("HomePicturesScreen")}>
                  <Text style={styles.submitBtnTx}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.MoreAndImageCnt}>
            <TouchableOpacity style={styles.ShareCnt}>
              <Image source={Images.shareIcon}/>
              <Text style={styles.shareTx}>Share</Text>
            </TouchableOpacity>
            <Image
              style={styles.handImageStle}
              source={Images.handImage2} />
            <View style={styles.moreEndDotsCNT}>
              <Text style={styles.TxmoreStl1}>...</Text>
              <Text style={styles.TxmoreStl}>More</Text>
            </View>
          </View>
        </View>
        <Text style={styles.AboutUsTx}>About Us</Text>
        <View style={styles.socielBtnCnt}>
          <View style={styles.socielBtnCnt2}>
            <TouchableOpacity>
              <Image
                style={styles.socielBtn}
                source={Images.youtubeBTN} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socielBtn}
                source={Images.facbook_logo} />
            </TouchableOpacity>
          </View>
          <View style={styles.socielBtnCnt2}>
            <TouchableOpacity>
              <Image
                style={styles.socielBtn}
                source={Images.google_logo} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.socielBtn}
                source={Images.whatsapp_logo} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.paragrphStl}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  headingTx: {
    fontSize: 35,
    paddingHorizontal: 15,
    fontFamily: "Italiana-Regular",
    color: "#000000"
  },
  headingTx2: {
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 5,
    fontFamily: "Italiana-Regular",
    color: "#000000"
  },
  handImageStle: {
    width: dw / 1.05,
    alignSelf: 'center'
  },
  paragrphStl: {
    // backgroundColor: 'red',
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 10,
    marginVertical: 18,
    marginTop: 29,
    color: "#626262",
    fontFamily: "Kanit-ExtraLight"
  },
  socielBtn: {
    marginHorizontal: 15
  },
  socielBtnCnt: {
    flexDirection: 'row'
  },
  socielBtnCnt2: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'center'
  },
  AboutUsTx: {
    fontSize: 15,
    alignSelf: 'center',
    paddingVertical: 15,
    color: "#000000",
    fontFamily: "Kanit-Regular",
  },
  moreEndDotsCNT: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  TxmoreStl: {
    fontSize: 10,
    alignSelf: 'center',
    fontFamily: "Kanit-Regular",
    color: "#000000",
    paddingVertical: .5

  },
  TxmoreStl1: {
    fontSize: Platform.OS == 'ios' ? 18 : 15,
    alignSelf: 'center',
    fontFamily: "Kanit-Regular",
    color: "#000000",
    paddingRight: 2,
    top: -4,
    fontWeight: 'bold',
    letterSpacing: Platform.OS == 'ios' ? 0.4 : -1
  },
  MoreAndImageCnt: {
    backgroundColor: '#D8D8D8',
    width: dw / 1.05,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15,
    overflow: 'hidden'
  },
  TextInputViewCnt: {
    //backgroundColor:'#F2F2F2',
    //paddingVertical: 15,
    width: dw / 1.5,
    //marginRight:27
  },
  TextInputStl: {
    backgroundColor: '#FFFFFF',
    padding: 0,
    marginHorizontal: 5,
    marginVertical: 5,
    elevation: 9,
    height: dh / 38,
    width: dw / 1.79,
    color: "#838383",
    fontSize: 9.5,
    paddingHorizontal: 7,
    fontFamily: "Kanit-Regular",
  },
  TxInput_alreadyTxCnt: {
    backgroundColor: '#F2F2F2',
    paddingTop: 7
  },
  TxInput_submit_Row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: dw / 1.2,
    right: 16,
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingBottom: 8,
  },
  submitBtn: {
    //backgroundColor:'red',
    right: 16
    //width:55
    // alignItems:'center'
  },
  submitBtnTx: {
    color: '#F51111',
    fontSize: 9.5,
    fontFamily: "Kanit-SemiBold"
  },
  ShareCnt:{
    flexDirection:'row',
    position:'absolute',
    zIndex:1,
    right:8,
    top:8
  },
  shareTx:{
    fontFamily: "Kanit-Regular",
    color: "#000000",
    fontSize: 10,
  }

});
