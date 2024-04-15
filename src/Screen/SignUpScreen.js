import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Images from '../assets/index'

const SignUpScreen = ({ navigation }) => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [otp, setotp] = useState("")

  const checkMail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email !== "" && password !== "" && name !== "") {
      let emailVerify = reg.test(email);
      if (emailVerify === false) {
        Alert.alert("Email not valid please check")
        return;
      } else {
        setemail(text)
        navigation.navigate('VerificationScreen')
      }
    } else {
      Alert.alert("Please enter values first")
    }

  }
  return (
    <View style={styles.container}>
      <View>
      </View>
      <View style={styles.centerView}>
        <Image style={styles.dummy_Icon} source={Images.DummyIcon} />
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInputInner}
            placeholder="Username"
            value={name}
            onChangeText={(text) => setname(text)}
            placeholderTextColor="#282828"
          />
        </View>
        <View style={styles.textInputSecond}>
          <TextInput
            style={styles.textInputInner}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setemail(text)}
            placeholderTextColor="#282828"
          />
        </View>
        <View style={styles.textInputSecond}>
          <TextInput
            style={styles.textInputInner}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setpassword(text)}
            placeholderTextColor="#282828"
          />
        </View>
        <View style={styles.otpView}>
          <View>
            <TextInput
              style={styles.textInputotp}
              placeholder="Enter the OTP"
              value={otp}
              onChangeText={(text) => setotp(text)}
              placeholderTextColor="#282828"
            />
            <View style={styles.lineView} />
          </View>
          <TouchableOpacity style={styles.getButton}>
            <Text style={styles.getText}>Get OTP?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.underlineText}>Already have an account?<Text style={styles.signUpText}> Signin</Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={() => checkMail(email)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>Copyright @2024</Text>
    </View>
  );
};

export default SignUpScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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

  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInputView: {
    backgroundColor: "#EEEEEE",
    height: 40,
    width: 300,
    borderRadius: 20,
    justifyContent: 'center',
  },

  textInputInner: {
    paddingHorizontal: 20
  },

  textInputSecond: {
    backgroundColor: "#EEEEEE",
    height: 40,
    width: 300,
    marginTop: 30,
    borderRadius: 20,
    justifyContent: 'center',
  },

  bottomText: {
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 20
  },

  submitButton: {
    height: 40,
    width: 120,
    marginTop: 20,
    backgroundColor: "#85A6FC",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },

  underlineText: {
    marginTop: 15,
    color: "#000000",
    textDecorationLine: 'underline',
  },

  signUpText: {
    color: "#85A6FC",
  },

  otpView: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center"
  },

  textInputotp: {
    width: 190,
    padding: 0
  },

  lineView: {
    height: 1,
    width: 200,
    backgroundColor: "#000",
    marginTop: 5
  },

  getButton: {
    backgroundColor: "#f88183",
    width: 80,
    height: 30,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },

  getText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600"
  },

});
