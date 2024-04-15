import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const FAQScreen = ({navigation}) => {
    const [data, setData] = useState([
        {
            id: 1,
            question: "question",
            answer: "answer",
            isSelected: true
        },
        {
            id: 2,
            question: "question",
            answer: "answer",
            isSelected: false
        },
        {
            id: 3,
            question: "question",
            answer: "answer",
            isSelected: false
        },
        {
            id: 4,
            question: "question",
            answer: "answer",
            isSelected: false
        },
        {
            id: 5,
            question: "question",
            answer: "answer",
            isSelected: false
        },
        {
            id: 6,
            question: "question",
            answer: "answer",
            isSelected: false
        },
    ]);
    const selectedData = async (item) => {
        console.log("Item :",item);
        var newArr = []
        let tempObj = data.map((i,en)=>{ 
            if(i.id==item.id){
                let i1 = i
                i1["isSelected"] = true
                newArr.push(i1)
            }else{
                let i1 = i
                i1["isSelected"] = false
                newArr.push(i1)
            }
        })
        setData(newArr)
    }
    const renderData = (item) => {
        console.log("@@@ itemitemitemitem ====================", item)
        return (
            <View style={styles.flatlistData}>
                <TouchableOpacity style={styles.questionView} onPress={() => selectedData(item)}>
                    <Text style={styles.questionTxt}>Question</Text>
                    <Text style={styles.questionTxt}>X</Text>
                </TouchableOpacity>
               {item.isSelected && <View style={styles.answerView}>
                    <Text style={styles.anwerTxt}>This section will be of the answer given by the owner of this app.</Text>
                </View>}
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headingTxt}>FAQ's</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => renderData(item)}
                keyExtractor={(item, index) => index.toString()}
                extraData={data}
            />
        </View>
    );
}

export default FAQScreen;

const styles = StyleSheet.create({
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

    flatlistData: {
        marginLeft: 30,
        marginTop: 25
    },

    headingTxt: {
        marginTop: 50,
        marginLeft: 30,
        fontSize: 20,
        fontWeight: "600"
    },

    questionView: {
        backgroundColor: "#FFC1C1",
        borderRadius: 20,
        width: 310,
        justifyContent: 'space-between',
        padding: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    questionTxt: {
        color: "#757575",
        fontSize: 20,
        fontWeight: "600"
    },

    answerView: {
        backgroundColor: "#dbe3fd",
        borderRadius: 20,
        width: 310,
        justifyContent: 'center',
        padding: 10,
        marginTop: 5
    },

    anwerTxt: {
        // width: 300
    }

});

