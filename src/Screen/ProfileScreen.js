import * as React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Platform } from 'react-native';
import Images from '../assets/index'

const ProfileScreen = ({navigation}) => {
   
    return (
        <View style={styles.container}>
            <Text style={styles.headingTxt}>Name Here</Text>

            <View style={styles.profileView}>
                <Image source={Images.logoIcon} style={styles.profileImage} />
            </View>
            <Text style={styles.profileTxt}>Profile Name</Text>
            <Text style={styles.emailtxt}>@emailaddress</Text>
            <View style={styles.centerView}>
                <Text>App Version</Text>
                <Text>36-2.5.0 (4)</Text>
            </View>
            <TouchableOpacity style={styles.centerView2}>
                <Text>Privacy Policy</Text>
                <Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerView2} onPress={() => navigation.navigate('ContactUsScreen')}>
                <Text>Contact us</Text>
                <Text></Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutView} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.logoutTxt}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

    logoIcon: {
        height: 100,
        width: 300
    },

    headingTxt: {
        fontSize: 40,
        color: "#000",
        marginTop: Platform.OS === "ios" ?  60 : 30,
        marginLeft: 30
    },

    profileView: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#000",
        justifyContent: "center",
        marginTop: 40
    },

    profileImage: {
        height: 75,
        width: 75,
        backgroundColor: "red",
        borderRadius: 36
    },

    profileTxt: {
        textAlign: "center",
        color: "#000000",
        fontWeight: "800",
        marginTop: 40
    },

    emailtxt: {
        textAlign: "center",
        color: "#000000",
        marginTop: 5
    },

    centerView: {
        marginLeft: 30,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E7E7E7",
        padding: 15,
        marginRight: 30,
        marginTop: Platform.OS === "ios" ?  100 : 80
    },

    centerView2: {
        marginLeft: 30,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E7E7E7",
        padding: 15,
        marginRight: 30,
    },

    logoutView: {
        backgroundColor: "#E7E7E7",
        height: 40,
        width: 200,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        borderRadius: 15
    },

    logoutTxt: {
        color: "#D01A1A",
        fontSize: 15,
        fontWeight: "600"
    }
});