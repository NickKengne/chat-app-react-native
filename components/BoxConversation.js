import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

const BoxConversation = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <ImageBackground source={require('../assets/image/user1.jpg')} style={{
            width: 45,
            aspectRatio:1,
            borderRadius: 9999,
            overflow: 'hidden',
            marginRight: 10,
        }}/>
        <View style={{
            width: "74%",
            paddingLeft: 5,
        }}>
            <Text style={{
                fontSize: 17,
                fontFamily:Font['mulish-regular'],
                color:Colors.white
            }}>Nick </Text>
            <Text style={{
                fontSize: 14,
                color: "#ffffff50",
                fontFamily:Font['mulish-regular']
            }}>Bonjour Mr Dibrilain comment vou..</Text>
        </View>
        <View style={{
            justifyContent:"space-between",
            alignItems:"center",
            marginLeft: 6,
            height: 40
        }}>
            <Text style={{
                fontSize: 12,
                color:Colors.white
            }}>21h22</Text>
            <View style={{
                width:18,
                aspectRatio: 1,
                backgroundColor: Colors.primary,
                justifyContent:"center",
                alignItems:"center",
                borderRadius:9999

            }}>
                <Text style={{
                    fontSize:9,
                    color:Colors.white
                }}>1</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default BoxConversation

const styles = StyleSheet.create({
    container:{
        width:"94%",
        height: 75,
        alignSelf:"center",
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between"

    }
})